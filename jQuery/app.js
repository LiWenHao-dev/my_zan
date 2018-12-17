//引入模块
const express=require('express');
const session = require("express-session");
const bodyParser=require('body-parser');

//导入路由
const index=require("./router/index.js");
const user=require("./router/user.js");
const riproduct=require("./router/riproduct.js");
const nav=require("./router/nav.js")
const search=require("./router/search.js")
const details=require("./router/details.js")

//构建web服务器
var app=express();
app.listen(2500,()=>{
    console.log('web创建成功');
});
//托管静态资源
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(session({
    secret:'随机字符串',
    cookie:{maxAge:60*1000*30},//过期时间ms
    resave:false,
    saveUninitialized:true
  }));

//挂载
app.use("/index",index);
app.use("/user",user);
app.use("/riproduct",riproduct);
app.use("/nav",nav)
app.use("/search",search)
app.use("/details",details)
