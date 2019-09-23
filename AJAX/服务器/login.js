var http=require('http');
var url=require('url');
var queryString=require('querystring');

//创建服务器
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Access-Control-Allow-Origin':'*'});
    if(url.parse(req.url,true).pathname === '/favicon.ico'){
        return;
    }
    var obj={};

    console.log("尝试GET方式获接收参数..........");
    var rdata = url.parse(req.url, true).query;    
    if (rdata["username"] != undefined || rdata["pwd"] != undefined) {
        if(rdata.username=="admin"&&rdata.pwd=="123"){
            obj.code=1;
            obj.msg='登录成功!';
            obj.username=rdata.username;
        }else{
            obj.code=0;
            obj.msg="用户名或者密码有误";
        }
        res.write(JSON.stringify(obj));//结果返回
        res.end();//
        return;
    }
    console.log("GET方式失败，尝试POST方式.......");


    req.setEncoding('utf-8');
    var data='';

    req.on('data',function(result){
        data+=result;
    });

    req.on('end',function(){        
        data=queryString.parse(data);
        if(Object.keys(data).length==2){
            var uname=data.username;//用户名
            var pwd=data.pwd;//密码
            console.log(uname,pwd);
            if(uname==="admin"&&pwd==="123"){
                obj.code=1;
                obj.msg='登录成功!';
                obj.username=uname;
            }else{
                obj.code=0;
                obj.msg="用户名或者密码有误";
            }
        }else{
            obj.code=2;
            obj.msg="参数有误";
        }
        // console.log(obj);
        res.write(JSON.stringify(obj));//结果返回
        res.end();//
    });


}).listen(3000,function(err){
    if(!err){
        console.log("服务器开启成功，端口为3000!");
    }
});