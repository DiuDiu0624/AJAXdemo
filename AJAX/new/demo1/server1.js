let express=require('express');
let app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    // console.log(req.url);
    let username=req.query.username;
    let pwd=req.query.pwd;
    // console.log(username);
    let obj={};
    if(username=='tom'&&pwd=='123456'){
        obj.code=200;
        obj.msg='登录成功';
    }else{
        obj.code=501;
        obj.msg='登陆失败';
    }
    res.send(JSON.stringify(obj));
});

 app.post('/',(req,res)=>{
     res.header("Access-Control-Allow-Origin","*");
     res.send('post ok');
 });

app.post('/login',(req,res)=>{
    console.log('post call.........');
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Credentials',' true');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','WWW-Authenticate,Authorization,Set-Cookie,X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,name');


    console.log(req.body);
    // setTimeout(()=>{
    //     res.send('post params ok');
    // },3000);
    let obj={name:"jack",age:20};
    res.send(JSON.stringify(obj));
    
});

app.listen(5000);

console.log('my server is running on 5000................');