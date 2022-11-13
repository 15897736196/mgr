//require一个文件 就会去执行它 这里执行过后
require('./Schemas/User');
require('./Schemas/InviteCode');
require('./Schemas/Book');
require('./Schemas/InventoryLog');
require('./Schemas/Character');
require('./Schemas/Log');
require('./Schemas/LogResponse');
require('./Schemas/ForgetPassword');
require('./Schemas/Classify');

const mongoose = require('mongoose');

//给哪个数据库的
//哪个文档
//添加什么格式的文档

//Schema  映射了Mongodb下的一个集合，并且 他的内容就是集合下文档的构成
//Modal  可以理解成是根据Schema生成的一套方法 这套方法用来操作MongoDB集合和集合下的文档

const connect = () => {
  return new Promise((resolve) => {
    //去链接数据库
    mongoose.connect('mongodb://127.0.0.1:27017',
    {user:'root',pass:'123456'});
    // mongoose.connect('localhost:27017');
    console.log('尝试连接数据库');
    //当数据库被打开的时候做一些事情
    mongoose.connection.on('open', () => {
      console.log('链接数据库成功');

      resolve();
    });
  });
};
module.exports = {
  connect,
};
