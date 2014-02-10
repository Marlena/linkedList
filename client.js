require('./src/linked_list');
require('./public/javascripts/d3.min');
require('./public/javascripts/jquery-2.0.3.min');

//onready function
$(function() {
    console.log("hello world");  //entry point to backbone views


});


var ListyApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function(){
        new ListyApp.Routers.Tasks();
        Backbone.history.start();
    }


}
