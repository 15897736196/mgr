const Router = require('@koa/router');
const mongoose = require('mongoose');
const { getBody } = require('../../helpers/utils');
const { loadExcel, getFirstSheet } = require('../../helpers/excel');
const Book = mongoose.model('Book');
const InventoryLog = mongoose.model('InventoryLog');
const Classify = mongoose.model('Classify');
const config = require('../../project.config');
const BOOK_CONST = {
  //入库和出库
  IN: 'IN_COUNT',
  OUT: 'OUT_COUNT',
};

//封装通过id来在数据库中查找某项数据的函数
const findBookOne = async (id) => {
  const one = await Book.findOne({ _id: id }).exec();
  return one;
};

//表示当前的路由实例全部是处理auth相关请求的
const router = new Router({
  prefix: '/book',
});

router.post('/add', async (ctx) => {
  //从请求体中获取相关数据

  const { name, price, author, publishDate, classify, count } = getBody(ctx);

  //用这些数据新建出数据库文档
  const book = new Book({
    name,
    price,
    author,
    publishDate,
    classify,
    count,
  });

  const res = await book.save();

  //响应一下
  ctx.body = {
    data: res,
    code: 1,
    msg: '添加成功',
  };
});

//获取列表信息
router.get('/list', async (ctx) => {
  const { page = 1, keyword = '' } = ctx.query;
  let = { size = 10 } = ctx.query;
  size = Number(size);

  const query = {};
  if (keyword) {
    query.name = keyword;
  }

  //跳过几条数据 要几条数据 来实现分页
  const list = await Book.find(query)
    .sort({
      _id: -1,
    })
    .skip((page - 1) * size)
    .limit(size)
    .exec();
  //当前的集合一共有几条文档
  const total = await Book.countDocuments();
  ctx.body = {
    data: {
      total,
      list,
      page,
      size,
    },
    code: 1,
    msg: '获取列表成功',
  };
});

//删除某条列表信息
// ：id 为通配符 只要是 /book/xxxx 都会匹配到
//这时会取出 xxx的值名为id 并塞到params里面
router.delete('/:id', async (ctx) => {
  const { id } = ctx.params;

  const delMsg = await Book.deleteOne({
    _id: id,
  }).exec();
  ctx.body = {
    data: delMsg,
    msg: '删除成功',
    code: 1,
  };
});

//出入库的接口 同时将出入库的数据存入InventoryLog中去
router.post('/update/count', async (ctx) => {
  const { id, type } = ctx.request.body;
  // console.log(id)
  let { num } = ctx.request.body;
  num = Number(num);

  const book = await findBookOne(id);

  if (!book) {
    ctx.body = {
      code: 0,
      msg: '没有找到书籍',
    };
    return;
  }
  //找到书籍
  //入库
  if (type === BOOK_CONST.IN) {
    num = Math.abs(num);
  } else {
    //出库
    num = -Math.abs(num);
  }

  book.count += num;
  if (book.count < 0) {
    ctx.body = {
      code: 0,
      msg: '书籍不足',
    };
    return;
  }
  //满足出入库的条件 save一下 同步到数据库
  const res = await book.save();

  //存入出入库记录
  const log = new InventoryLog({
    num: Math.abs(num),
    type,
  });
  log.save();

  ctx.body = {
    data: res,
    code: 1,
    msg: '操作成功',
  };
});

router.post('/update', async (ctx) => {
  const { id, ...others } = ctx.request.body;

  const one = await findBookOne(id);
  // const one = await Book.findOne({
  //     _id:id,
  // }).exec();

  if (!one) {
    ctx.body = {
      msg: '没有找到书籍',
      code: 0,
    };
    return;
  }
  const newQuery = {};
  Object.entries(others).forEach(([key, value]) => {
    if (value) {
      newQuery[key] = value;
    }
  });
  Object.assign(one, newQuery);
  const res = await one.save();

  ctx.body = {
    data: res,
    code: 1,
    msg: '保存成功',
  };
});

router.get('/detail/:id', async (ctx) => {
  const { id } = ctx.params;
  const one = await findBookOne(id);
  if (!one) {
    ctx.body = {
      msg: '没有找到书籍',
      code: 0,
    };
    return;
  }

  ctx.body = {
    msg: '查询成功',
    data: one,
    code: 1,
  };
});

router.post('/addMany', async (ctx) => {
  const { key = '' } = ctx.request.body;
  const path = `${config.UPLOAD_DIR}/${key}`;

  const excel = loadExcel(path);
  const sheet = getFirstSheet(excel);

  const arr = [];

  for (let i = 0; i < sheet.length; i++) {
    let record = sheet[i];

    const [name, price, classify, author, publishDate, count] = record;

    let classifyId = classify;
    const one = await Classify.findOne({ title: classify });

    if (one) {
      classifyId = one._id;
    }
    console.log(12313131312313);
    console.log(classifyId);
    arr.push({
      name,
      price,
      classify: classifyId,
      author,
      publishDate,
      count,
    });
  }
  await Book.insertMany(arr);

  ctx.body = {
    code: 1,
    msg: '添加成功',
    data: {
      addCount: arr.length,
    },
  };
});
module.exports = router;
