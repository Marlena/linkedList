'use strict';

exports.createServer = function(){

    var express = require('express');


    var app = express();



    app.set('port', process.env.PORT || 5000);
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.set('view options', { layout: true });

    app.use(express.favicon());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.logger('dev'));

    app.use(express.static(__dirname + '/public'));


    app.get('/', function(req, res){
       res.render('index', {
           title: 'Home'
       })

    })

    return app;
}

//http://shapeshed.com/creating-a-basic-site-with-node-and-express/

//explains using stylus with express
//http://clock.co.uk/tech-blogs/a-simple-website-in-nodejs-with-express-jade-and-stylus