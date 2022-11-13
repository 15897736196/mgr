const Router = require('@koa/router');
const mongoose = require('mongoose');

const Classify = mongoose.model('Classify');

const router = new Router({
  prefix: '/classify',
});

router.get('/list', async (ctx) => {
  const list = await Classify.find().sort({ _id: -1 }).exec();
  ctx.body = {
    code: 1,
    data: list,
    msg: '获取成功',
  };
});

router.post('/add', async (ctx) => {
  const { title } = ctx.request.body;

  const one = await Classify.findOne({
    title,
  });
  if (one) {
    ctx.body = {
      code: 0,
      msg: '书籍分类已存在',
    };
    return;
  }
  const classify = new Classify({
    title,
  });

  const saved = await classify.save();
  ctx.body = {
    code: 1,
    data: saved,
    msg: '生成成功',
  };
});

router.delete('/:id', async (ctx) => {
  const { id } = ctx.params;
  const res = await Classify.deleteOne({ _id: id });
  ctx.body = {
    code: 1,
    data: res,
    msg: '删除成功',
  };
});

router.post('/update/title', async (ctx) => {
  const { id, title } = ctx.request.body;
  const one = await Classify.findOne({ _id: id });
  if (!one) {
    ctx.body = {
      code: 0,
      msg: '资源不存在',
    };
    return;
  }

  one.title = title;

  const res = await one.save();
  ctx.body = {
    code: 1,
    data: res,
    msg: '修改成功',
  };
});

module.exports = router;
