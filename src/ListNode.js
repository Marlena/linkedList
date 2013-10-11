/**
 * Created with JetBrains WebStorm.
 * User: marlena
 * Date: 9/24/13
 * Time: 6:45 AM
 * To change this template use File | Settings | File Templates.
 */

function ListNode (data){
    'use strict';

    this.data = function (){
        return data;
    } //could be generic data object or could be actual data
    this.next = null;



    this.print = function (){
        return this.data.toString();
    }

    this.setNext = function(aListNode){
        this.getNext = aListNode;
    }

    this.getNext = function(){
        return this.next;
    }

}
