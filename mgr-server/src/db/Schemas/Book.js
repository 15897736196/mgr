const mongoose = require('mongoose');
const { getMeta, preSave } = require('../helper');

//schema是映射到数据库的文档应该有什么数据
const BookSchema = new mongoose.Schema({
  //书籍名
  name: String,
  //价格
  price: Number,
  //操作者
  author: String,
  //生产日期
  publishDate: String,
  //分类
  classify: String,
  //库存
  count: Number,

  meta: getMeta(),
});
//钩子 设置在保存之前要做什么事情 就是去更新这个meta时间 但是在当前schema有效
BookSchema.pre('save', preSave);

//-----注册Schema-------
mongoose.model('Book', BookSchema);
