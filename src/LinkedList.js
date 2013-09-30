/**
 * Created with JetBrains WebStorm.
 * User: marlena
 * Date: 9/22/13
 * Time: 9:49 PM
 * To change this template use File | Settings | File Templates.
 */

function LinkedList (){
    'use strict';

    this.first = null;

    this.isEmpty = function () {
        if ((this.first) === null){
            return true;
        }
        else{
            return false;
        }
    };

    this.add = function (listNode){

        //add a node to the front of the empty list
        if (this.isEmpty()){
            this.first = listNode;
        }
        else{
            //list is not empty so traverse to the end
            var current = this.first;
            while (current != null){
                //add the node at the end where next is null
                if (current.next == null){
                    current.setNext(listNode);
                    break;
                }
                current = next;
            }

        }

    };

    this.length = function(){
        var current = this.first;
        var length = 0;

        if (current == null){
            return length;
        }
        else{
            while (current != null){
                length += 1;
                current = current.next;
            }
            return length;
        }


    }

}

