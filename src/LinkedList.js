/**
 * Created with JetBrains WebStorm.
 * User: marlena
 * Date: 9/22/13
 * Time: 9:49 PM
 * To change this template use File | Settings | File Templates.
 */

function LinkedList (){
    'use strict';

    var first = null;

    this.add = function (item){

        var node = {data:item, next:first};
        first = node;


    };

    this.first = function (){

     if (first === null){
         return null;
     }
     return first.data;
    };

    this.isEmpty = function () {
        if ((this.first) === null){
            return true;
        }
        else{
            return false;
        }
    };

    this.itemAt = function(loc){
        var current = first;
        var item = null;

        for (var i = 0; i < (loc - 1); i++){
            current = current.next;
        }
        return current.data;

        this.each(function(data){

        })

    };





    this.size = function(){

        var size = 0;
        this.each(function(){ size++; });
        return size;
    };

    this.print = function(){
        var items = [];
        this.each(function(data){
            items.push(data);
        });

        return items.join(', ');
    };

    this.contains = function(item){

        var found = false;

        this.each(function(data){
            if (data === item){
                found = true;
            }

        })
        return found;
    };

    this.each = function(myfunction){
        var current = first;
        var index = 0;

        while(current != null){
            myfunction(current.data, index);
            current = current.next;
            index++;


        }

    };


};

//find
//map
//select
//reduce
