//用来处理和首页有关的请求
const express=require("express");
const router=express.Router();
const pool=require("../pool");

//接口：localhost:2500/index/getIndexdflexa
router.get("/getIndexdflexa",(req,res)=>{
	var output={a:[],b:[],c:[],d:[],e:[],f:[],g:[]}
  var sql1="SELECT * FROM zan_country where zhouid=?";
  var sql2="SELECT * FROM zan_country where zhouid=?";
  var sql3="SELECT * FROM zan_country where zhouid=?";
  var sql4="SELECT * FROM zan_country where zhouid=?";
  var sql5="SELECT * FROM zan_country where zhouid=?";
  var sql6="SELECT * FROM zan_country where zhouid=?";
  var sql7="SELECT * FROM zan_country where zhouid=?";
	Promise.all([
      new Promise(function(open){
        pool.query(sql1,[1],(err,result)=>{
          if(err) console.log(err);
           output.a=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql2,[2],(err,result)=>{
          if(err) console.log(err);
           output.b=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql3,[3],(err,result)=>{
          if(err) console.log(err);
           output.c=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql4,[4],(err,result)=>{
          if(err) console.log(err);
           output.d=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql5,[5],(err,result)=>{
          if(err) console.log(err);
           output.e=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql6,[6],(err,result)=>{
          if(err) console.log(err);
           output.f=result;
          open();
        })
      }),
      new Promise(function(open){
        pool.query(sql7,[7],(err,result)=>{
          if(err) console.log(err);
           output.g=result;
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
    })
})
module.exports=router;