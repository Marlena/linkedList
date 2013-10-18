/**
 * Created with JetBrains WebStorm.
 * User: marlena
 * Date: 9/22/13
 * Time: 9:51 PM
 * To change this template use File | Settings | File Templates.
 */
describe("LinkedList", function() {

    beforeEach(function(){
       myList = new LinkedList();
    })

    it ("has a size", function(){
        expect(myList.size()).toBe(0);

    });

    it ("has a first item", function(){

        myList.add("one");
        expect(myList.first()).toBe("one");

    });

    it ("will return null if the list is empty", function(){
        expect(myList.first()).toBe(null);

    });

    it ("can add an item to the list", function(){
        myList.add("blah");
        expect(myList.size()).toBe(1);
        myList.add("sea shepherd");
        expect(myList.size()).toBe(2);


    });

    it ("can say it contains a particular piece of data", function(){
        expect(myList.contains("blah")).toBe(false);
        myList.add("blah");
        expect(myList.contains("blah")).toBe(true);
    });

    it ("can print an item in a specified location in the list", function(){
        myList.add("velvet biker capelet");//5
        myList.add("flesh colored chiffon blouse");//4
        myList.add("deconstructed kilt");//3
        myList.add("micro fishnet hosiery"); //2
        myList.add("Doc Martens"); //1

        expect(myList.itemAt(3)).toBe("deconstructed kilt");
        expect(myList.itemAt(5)).toBe("velvet biker capelet");

    });

    it ("can print the list", function(){

        expect(myList.print()).toBe("");
        myList.add("lorikeets");
        myList.add("wallabies");
        myList.add("wombats");
        myList.add("kangaroos");

        expect(myList.print()).toBe("kangaroos, wombats, wallabies, lorikeets");

    });

    it ("can access each item", function(){
        myList.add("lorikeets");
        myList.add("wallabies");
        myList.add("wombats");
        myList.add("kangaroos");
        var items = [];
        myList.each(function(data) {
          items.push(data);
        });
        expect(items).toEqual(["kangaroos, wombats, wallabies, lorikeets"]);
    });



});