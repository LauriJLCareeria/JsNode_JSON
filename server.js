var fs = require('fs');
const http = require('http');

var htmlsrv = http.createServer(function(req, res){
    let htmlTiedosto=req.url;
    if (htmlTiedosto=='/favicon.ico') { htmlTiedosto = '/index4.html'}; 
    switch (req.url) {
        case "/nappikauppa.css" :
            res.writeHead(200, {"Content-Type": "text/css"});
            var myReadStream = fs.createReadStream(__dirname + '/nappikauppa.css', 'utf8' );            
            myReadStream.pipe(res);
            break;
        case "/app.js" :
            res.writeHead(200, {"Content-Type": "text/javascript"});
            var myReadStream = fs.createReadStream(__dirname + '/app.js', 'utf8' );            
            myReadStream.pipe(res);
            break; 
        case "/tuotteet.json" :
            res.writeHead(200, {"Content-Type": "application/json"});
            var myReadStream = fs.createReadStream(__dirname + '/tuotteet.json', 'utf8' );            
            myReadStream.pipe(res);
            break;
        case "/" :
            res.writeHead(200, {"Content-Type": "text/html"});
            var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8' );            
            myReadStream.pipe(res);
            break;
        default :  
            res.writeHead(200, {'Content-Type': 'text/html'});
            var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8' );
            myReadStream.pipe(res);
    }
});

// Start the server on port 3000
htmlsrv.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');