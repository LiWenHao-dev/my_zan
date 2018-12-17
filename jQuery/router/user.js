//引入模块
const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();

//根据用户名查询是否已经存在
//localhost:2500/user/selectuname
router.get('/selectUname',(req,res)=>{
	var $uname=req.query.uname;
	if(!$uname){
		res.send('用户名不能为空');
		return;
	}
	var sql='select * from user where uname=?';
	pool.query(sql,$uname,(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});

//创建注册路由
router.post('/register',(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	if($uname==''){res.send('用户名不能为空');return;};
	if($upwd==''){res.send('密码不能为空');return;};
	if($email==''){res.send('邮箱不能为空');return;};
	if($phone==''){res.send('电话不能为空');return;};
	if($user_name==''){res.send('真实姓名不能为空');return;};
	if($gender==''){res.send('性别不能为空');return;};
	var sql='INSERT INTO user VALUES(NULL,?,?,?,?,?,?)';
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
		if(err) throw err;
		if(result.affectedRow>0){
			res.send('0');
		}else{res.send('1');}
	});
});

	router.post("/signin",(req,res)=>{
		var uname=req.body.uname;
		var upwd=req.body.upwd;
		pool.query("select * from user where uname=? and upwd=?",[uname,upwd],(err,result)=>{
				if(err) console.log(err);
				res.writeHead(200,{
					"Content-type":"application/json;charset=utf-8", //防止中文乱码
					"Access-Control-Allow-Origin":"*"  //允许任意来源，即允许跨域请求
				});
				if(result.length>0){
					var user=result[0]
					req.session["uid"]=user["uid"];
					res.write(JSON.stringify({ok:1}))
				}else{
					res.write(JSON.stringify({ok:0,msg:"用户名或密码错误！"}))
				}
				res.end();
			}
		)
	});
	
	
	router.get("/islogin",(req,res)=>{
		res.writeHead(200,{
			"Content-type":"application/json;charset=utf-8", //防止中文乱码
			"Access-Control-Allow-Origin":"*"  //允许任意来源，即允许跨域请求
		});
		if(req.session["uid"] === undefined){
			res.write(JSON.stringify({ok:0}));
			res.end();
		}else{
			var uid=req.session.uid;
			pool.query("select * from user where uid=?",[uid],(err,result)=>{
				if(err) console.log(err);
				res.write(JSON.stringify({ok:1,uname:result[0].uname}));
				res.end();
			});
		}
	})
	
	
	router.get("/siginout",(req,res)=>{
		req.session["uid"] = undefined;
		res.writeHead(200,{
			"Content-type":"application/json;charset=utf-8", //防止中文乱码
			"Access-Control-Allow-Origin":"*"  //允许任意来源，即允许跨域请求
		});
		res.write(JSON.stringify({ok:0}));
		res.end();
	})


//导出路由
module.exports=router;