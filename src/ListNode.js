/**
 * Created with JetBrains WebStorm.
 * User: marlena
 * Date: 9/24/13
 * Time: 6:45 AM
 * To change this template use File | Settings | File Templates.
 */

function ListNode (data){
    'use strict';

    this.data = data; //could be generic data object or could be actual data
    this.next = null;

    this.get_data = function (){
        return this.data;
    }

    this.print = function (){
        return this.data.toString();
    }

    this.setNext = function(aListNode){
        this.next = aListNode;
    }

    this.getNext = function(){
        return this.next;
    }

}
