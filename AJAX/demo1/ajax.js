
/*
    实现从客户端请求服务器
    @parm  method    POST  GET
    @url  服务器地址
    @parms  请求参数
    @fn     回调函数
*/
// function ajax(method,url,fn,parms){
//     var xhr=new XMLHttpRequest();
//     method=method.toUpperCase();//转换为大写
//     //GET并且有参数
//     if(method==="GET"&&parms!=undefined){
//         // xhr.open(method,url,true);
//         url=url+"?"+parms;
//     }
//     xhr.open(method,url,true);
//     if(method=="POST" && parms!=undefined){
//         xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 
//         xhr.send(parms);
//     }else{
//         xhr.send(null);
//     }

//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4 && xhr.status ==200){
//             // console.log(xhr.responseText);
//             fn(xhr.responseText);
//         }
//     };
    
// }

function ajax(method,url,parms){
   return new Promise(function(resolve,reject){
        var xhr=new XMLHttpRequest();
        method=method.toUpperCase();//转换为大写
        //GET并且有参数
        if(method==="GET"&&parms!=undefined){
            // xhr.open(method,url,true);
            url=url+"?"+parms;
        }
        xhr.open(method,url,true);
        if(method=="POST" && parms!=undefined){
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 
            xhr.send(parms);
        }else{
            xhr.send(null);
        }
    
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status ==200){
                // console.log(xhr.responseText);
                // fn(xhr.responseText);
                resolve(xhr.responseText);
            }
        };
    });
    
    
}