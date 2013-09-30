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

    it ("can print numeric data", function(){
       myNode = new ListNode(42)
        expect(myNode.print()).toBe("42");
    });

    it ("can print strings", function(){
        myNode = new ListNode("blah");
        expect(myNode.print()).toBe("blah");
    });

    it ("can set the node's next reference", function(){
       myNode = new ListNode(42);

       var nextNode = new ListNode("blah");
       myNode.setNext(new ListNode("13"));
       expect(myNode.next).toBeDefined();
       expect(myNode.next.get_data()).toBe("13");
    });




});