let express =require("express");
let app =express();
let http =require("http");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Credentials',' true');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','WWW-Authenticate,Authorization,Set-Cookie,X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,name');
    next();
});

//var url = "http://localhost:8088?myUrl=http://apis.juhe.cn/simpleWeather/query";

app.get('/',(req,res)=>{
    let obj ={};
    let url =req.query.myUrl;
    if(url==undefined){
        obj.code='600';
        obj.msg={infor:'使用方法错误',use:'http://localhost:8088?myUrl=?'};
        res.send(JSON.stringify(obj));
        return;
    }
})



//https请求

getInfo(data=>{
        console.log(data);
        res.send('ok');
    });
    res.send('ok');



app.listen('8088',err=>{
    if(!err){
        console.log('ther server is running on 5000.............');
    }
});

//向其他服务器发送请求
function getInfo(url){
    let msg ='';
    // let msg=[];
    http.get(url,res=>{
        res.on('data',chuck=>{
            msg+=chuck;
            // msg.push(chuck);
        });
        res.on('end',()=>{
           console.log(msg);
            // var decodedBody = iconv.decode(Buffer.concat(msg), 'utf-8');
            // fn(decodedBody);
        })
        res.on('error',function(err){
            console.log('发送错误');
        });
    })
}