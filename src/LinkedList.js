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
    };


//rewrite to select
    this.contains = function(item){

        var current = first;
        var found = false;
        while (current !=null){
            if (current.data === item){
                found = true;
                return found;
            }
            current = current.next;
        }
        return found;
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

    this.each = function(myfunction){
        var current = first;

        while(current != null){
            myfunction(current.data);
            current = current.next;
        }

    };


};

//map
//select
//reduce
