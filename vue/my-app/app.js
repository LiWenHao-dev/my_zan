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
const zan_phone=require("./router/phone.js")
const cors=require("cors");

//构建web服务器
var app=express();

app.use(cors({
    origin:'http://localhost:8080',
    credentials:true
  }))
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
//   app.use(function (req, res, next) {
//     　　res.header("Access-Control-Allow-Credentials", "true");
//     　　res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
//     　　// res.header('Access-Control-Allow-Origin', '*');
//     　　res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     　　res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     　　if (req.method == 'OPTIONS') {
//     　　　　res.send(200); /*让options请求快速返回*/
//     　　} else {
//     　　　　next();
//     　　}
// })
//挂载
app.use("/index",index);
app.use("/user",user);
app.use("/riproduct",riproduct);
app.use("/nav",nav)
app.use("/search",search)
app.use("/details",details)
app.use("/zan_phone",zan_phone)
