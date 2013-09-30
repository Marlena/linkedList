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

    it ("can tell you the length of an empty list", function(){

        expect(myList.length()).toEqual(0);
    });

    it ("can add a ListNode to an empty list", function(){

        myList.add(new ListNode("blah"));
        expect(myList.isEmpty()).toEqual(false);
        expect(myList.length()).toEqual(1);

    });

    it ("can add a ListNode to a non-empty list", function(){
       myList.add(new ListNode("one"));
       myList.add(new ListNode("two"));
       //var lastNode = myList.last()
       //expect(lastNode.get_data()).toEqual("two");
       expect(myList.first.next.next.data).toEqual("two");

    });



});