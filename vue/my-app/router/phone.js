//用来请求手机端的数据
const express=require("express");
const router=express.Router();
const pool=require("../pool");


//http://localhost:2500/zan_phone/phonenav
router.get("/phonenav",(req,res)=>{
    var sql="SELECT * FROM zan_phone_topic";
    pool.query(sql,(err,result)=>{
        if(err) console.log(err);
        res.writeHead(200,{
            "Content-Type":"application/json;chartser=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));
        res.end();
    })
})
/*商品列表*/
	
			//帮我做个分页
router.get("/productlist",(req,res)=>{
  var output={
    count:0,
    pageSize:7,   //一页多少行
    data:[],
    pageIndex:req.query.pageIndex,
  }; 
		console.log(output.pageIndex);
  var progress=0;//SELECT * FROM zan_index_product limit ?,?
  var sql1="SELECT count(*) as c from zan_index_product"
  var sql2="SELECT * FROM zan_index_product limit ?,? "

  pool.query(sql1,[],(err,result)=>{
    if(err) console.log(err);
    output.count=Math.ceil(result[0].c/output.pageSize);
    progress+=50;
    if(progress==100){
        res.send(output);
    }
  })
  var offset=(output.pageIndex)*output.pageSize;    //计算分页偏移量
  console.log(offset,output.pageSize)
  pool.query(sql2,[offset,output.pageSize],(err,result)=>{
      if(err) throw err;
      output.data=result;
      progress+=50;
      if(progress==100){
          res.send(output);
      }
  });
})
/*router.get("/productlist",(req,res)=>{
  //1:参数  当前页码  页大小(一页显示几行数据)
  var pno = req.query.pno;            //2
  var pageSize = req.query.pageSize;  //5
  //2:sql
  //2.1:查找总记录数->转换总页数  15->3
  var sql = "SELECT * FROM zan_index_product";
  var obj = {};      //保存发送客户端数据
  var progress = 0;  //进度
  pool.query(sql,(err,result)=>{
      if(err)throw err;
      var c = Math.ceil(result[0].c/pageSize);
      obj.pageCount = c;
      progress+=50;
      if(progress==100){
        res.send(obj);
      }
  });*/
//zan_phone/productlist

module.exports=router;