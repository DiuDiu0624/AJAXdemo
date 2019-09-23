/**
 * Created by yao on 17/12/27.
 */
var express = require('express');
var app = express();
// var router = express.Router();
var http = require('http');
var https = require("https");
var url = require('url');
var qs = require('querystring');
app.all('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var resultData = '';//创建一个变量来接收返回的数据
    var query = url.parse(req.url).query;//提取出网址后面的参数
    var qs_parse = qs.parse(query);//把参数转换成对象
    console.info(qs_parse);
    if(qs_parse.myUrl == undefined){
        res.send("参数错误!<br>请传递参数myUrl=?");
        return;
    }
    if(qs_parse.myUrl.split('://')[0] == "https"){
        // https.get(qs_parse.myUrl,function (response) {
        https.get(query.substring(6),function (response) {
            response.setEncoding('utf8');
            response.on('data',function (result) {
                console.log(result);
                console.info();
                resultData += result;
            });
            response.on('end',function () {
                var str = '';
                if (qs_parse.callback){
                    str =  qs_parse.callback + '(' + JSON.stringify(resultData) + ')';
                }else {
                    str = JSON.stringify(resultData);
                }
                res.send(JSON.parse(str));
            });
        });
    }else {
        http.get(query.substring(6),function (response) {
            response.setEncoding('utf8');
            response.on('data',function (result) {

                console.info();
                resultData += result;
            });
            response.on('end',function () {
                var str = '';
                if (qs_parse.callback){
                    str =  qs_parse.callback + '(' + JSON.stringify(resultData) + ')';
                }else {
                    str = JSON.stringify(resultData);
                }

                // console.log(result);
                res.send(JSON.parse(str));
            });
        });
    }

});

var server = app.listen(8088, function () {

    var port = server.address().port;

    console.log("服务器启动成功，访问地址为 http://localhost:" + port);

});
