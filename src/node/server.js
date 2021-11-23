const http = require('http')
const url = require('url')
const fs = require('fs');

function start(route){
    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // route(pathname);

        fs.readFile(pathname.substr(1), function(err, data){

            if(err){
                console.log('11111', err, pathname.substr(1));
                response.writeHead(404, {'Content-Type': 'text/html'});
            }else{
                console.log('22222')
                response.writeHead(200, {'Content-Type': 'text/html'});

                // 响应文件内容
                response.write(data.toString());
            }
            response.end();
        })
    }

    http.createServer(onRequest).listen(8888);
    console.log('server started');
}

exports.start = start;
