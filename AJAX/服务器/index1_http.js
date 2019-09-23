var http = require("http");

var server = http.createServer(function(request, response){
    response.setHeader("Access-Control-Allow-Origin", "*");
    //var origin = request.headers.origin;
   // console.log(origin);
    /*if([
        "http://192.168.1.26:63342",
            "http://localhost:63342"
        ].indexOf(origin) !== -1){
        response.setHeader("Access-Control-Allow-Origin", origin);
    }*/
    // response.write("<h1>hello, everyone!</h1>");
    response.write("<h1>hello, how are you!</h1>");
    response.end();
}).listen(3001, function(err){
    if(!err){
        console.log("server is running on port 3001...");
    }
});
