/**
 * Created with JetBrains WebStorm.
 * User: marlena
 * Date: 9/24/13
 * Time: 6:44 AM
 * To change this template use File | Settings | File Templates.
 */

describe("ListNode", function(){


    var myNode;

    beforeEach(function (){
      myNode = new ListNode(42);
    });

    it("contains data", function (){
      expect(myNode.data.tobe);
    });

    it ("has a reference to null", function (){
       expect(myNode.next).toBeNull();

    });




});