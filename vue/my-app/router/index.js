//用来处理和首页有关的请求
const express=require("express");
const router=express.Router();
const pool=require("../pool");

//接口：localhost:2500/index/getIndexpinjie
router.get("/getIndexcarousel",(req,res)=>{
    var sql="SELECT * FROM zan_index_carousel";
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        //res.send(result);
        res.writeHead(200,{
            "Content-Type":"application/json;chartser=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));
        res.end();
    })
})

router.get("/getIndexpinjie",(req,res)=>{
    var sql="SELECT * FROM zan_index_product where pid<6";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})

router.get("/getIndexzanpin",(req,res)=>{
    var sql="SELECT * FROM zan_index_product where pid>=6 and pid<12";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})

router.get("/getIndexhaiwai",(req,res)=>{
    var sql="SELECT * FROM zan_index_product where pid>=12 and pid<18";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})

router.get("/getIndexbieshu",(req,res)=>{
    var sql="SELECT * FROM zan_index_product where pid>=18 and pid<24";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})

router.get("/getIndexduanjia",(req,res)=>{
    var sql="SELECT * FROM zan_index_product where pid>=24 and pid<30";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})
router.get("/getIndexjiudian",(req,res)=>{
    var sql="SELECT * FROM zan_index_product where pid>=30 and pid<36";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})

//接口：localhost:2500/index/getIndexdflexa
router.get("/getIndexdflexa",(req,res)=>{
    var sql="SELECT * FROM zan_country where countryid>=1 AND countryid<16";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})

router.get("/getIndexdflexb",(req,res)=>{
    var sql="SELECT * FROM zan_country where countryid>=16 AND countryid<19";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})

router.get("/getIndexdflexc",(req,res)=>{
    var sql="SELECT * FROM zan_country where countryid>=19 AND countryid<26";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})
router.get("/getIndexdflexd",(req,res)=>{
    var sql="SELECT * FROM zan_country where countryid>=26 AND countryid<30";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})
router.get("/getIndexdflexe",(req,res)=>{
    var sql="SELECT * FROM zan_country where countryid>=30 AND countryid<43";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})
router.get("/getIndexdflexf",(req,res)=>{
    var sql="SELECT * FROM zan_country where countryid>=43 AND countryid<47";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})
router.get("/getIndexdflexg",(req,res)=>{
    var sql="SELECT * FROM zan_country where countryid>=47";
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
//res.send(result);
res.writeHead(200,{
    "Content-Type":"application/json;chartser=utf-8",
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(result));
res.end();
})
})

module.exports=router;