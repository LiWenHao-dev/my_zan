//用来处理和首页有关的请求
const express=require("express");
const router=express.Router();
const pool=require("../pool");

//接口：localhost:2500/details/getdetails
router.get("/getdetails",(req,res)=>{
    var pid=req.query.pid;
    var output={a:[],b:[],c:[],d:[],e:[],f:[],g:[],h:[]};
    var sql0="SELECT * FROM zan_details_carousel WHERE pid=?";
    var sql1="SELECT * FROM zan_details_taocan WHERE pid=? and taoid=1";
    var sql2="SELECT * FROM zan_details_taocan WHERE pid=? and taoid=2"
    var sql3="SELECT * FROM zan_details_xingcheng WHERE pid=?";
    var sql4="SELECT * FROM zan_details_jiudianxinxi WHERE pid=?";
    var sql5="SELECT * FROM zan_index_product WHERE pid=?"
    var sql7="select * from zan_ping"
    var sql8="select uname,avatar from user where uid<6"
    Promise.all([
      new Promise(function(open){
        pool.query(sql0,[pid],(err,result)=>{
          if(err) console.log(err);
           output.a=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql1,[pid],(err,result)=>{
          if(err) console.log(err);
           output.b=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql2,[pid],(err,result)=>{
          if(err) console.log(err);
           output.c=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql3,[pid],(err,result)=>{
          if(err) console.log(err);
           output.d=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql4,[pid],(err,result)=>{
          if(err) console.log(err);
           output.e=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql5,[pid],(err,result)=>{
          if(err) console.log(err);
           output.f=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql7,[pid],(err,result)=>{
          if(err) console.log(err);
           output.g=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql8,[pid],(err,result)=>{
          if(err) console.log(err);
           output.h=result;
          open();
        })
      })
    ]).then(function(){
        res.writeHead(200,{
          "Content-Type":"application/json;charset=utf-8",
          "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(output));
        res.end();
        console.log("响应完成!");
      })
})
router.get("/insert",(req,res)=>{
  var count=req.query.count;
  var text=req.query.text;
  var pid=req.query.pid;
  var sql6="INSERT INTO zan_ping values(null,?,?,?,now())"
  res.writeHead(200,{
    "Content-Type":"application/json;charset=utf-8",
    "Access-Control-Allow-Origin":"*"
  })
    if(text==""||count==""){
      res.write("评论不能为空");
      res.end();
    }else{
      pool.query(sql6,[pid,count,text],(err,result)=>{
        if(err) console.log(err);
          res.write(JSON.stringify(result));
          console.log(result);
          res.end();
          console.log("响应完成!");
      })
    }
})




module.exports=router;