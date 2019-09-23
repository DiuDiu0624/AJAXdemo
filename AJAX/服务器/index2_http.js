var http = require("http");
var url = require('url');

var server = http.createServer(function (request, response) {
    var req_url = url.parse(request.url, true);
    if(req_url.pathname === '/favicon.ico'){
        return;
    }
    var data = JSON.stringify({
        "info": "hello, everyone!"
    });
    if (req_url.query.callback) {
        data = ";" + req_url.query.callback + "(" + data + ")";
    }

    response.write(data);

    response.end();
}).listen(9000, function (err) {
    if (!err) {
        console.log("server is running on port 9000...");
    }
});
