/**
 * Created with JetBrains WebStorm.
 * User: marlena
 * Date: 9/22/13
 * Time: 9:51 PM
 * To change this template use File | Settings | File Templates.
 */
describe("LinkedList", function() {
    var node;


    beforeEach(function() {

        myList = new LinkedList;

    });

    it("has a reference to first", function(){

        expect(myList.first).toBeNull();
    });

    it ("is empty if first points to null", function(){

        myEmptyList = new LinkedList();
        expect(myEmptyList.isEmpty()).toBe(true);

    });

    it("will tell you how many ListNodes it contains", function(){
       expect(myList.length).toEqual(0);

    });

    it ("can have a ListNode added to it", function(){

        myNode = new ListNode("blah");
        myList.add(myNode);
        expect(myList.length).toEqual(1);

    });

});