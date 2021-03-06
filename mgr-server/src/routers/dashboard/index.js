const Router = require('@koa/router');
const mongoose = require('mongoose')

const Book = mongoose.model('Book');
const User = mongoose.model('User');
const Log = mongoose.model('Log');


const router = new Router({
    prefix:'/dashboard',
});

router.get('/base-info',async(ctx)=>{
    const bookTotal = await Book.countDocuments();
    const userTotal = await User.countDocuments();
    const logTotal = await Log.find({show:true}).countDocuments();

    ctx.body = {
        code:1,
        msg: '获取成功',
        data:{
            book:bookTotal,
            user:userTotal,
            log:logTotal
        }
    }
})



module.exports = router;