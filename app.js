exports.createServer = function(){

    var express = require('express');
    var app = express();
    app.set('port', process.env.PORT || 5000);

    app.use(express.favicon());
    app.use(express.json());
    app.use(express.urlencoded());

    app.get('/', function(req, res){
       res.write('hello world');
       res.end();
    })

    return app;
}


