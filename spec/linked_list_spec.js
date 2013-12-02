/**
 * Created with JetBrains WebStorm.
 * User: marlena
 * Date: 9/22/13
 * Time: 9:51 PM
 * To change this template use File | Settings | File Templates.
 */

describe("LinkedList", function() {
    var LinkedList;
    beforeEach(function(){
       LinkedList = require('../src/linked_list');
       myList = new LinkedList();
    });

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
        expect(items).toEqual(["kangaroos", "wombats", "wallabies", "lorikeets"]);
    });

    it ("can tell how many times the each loop has executed", function(){

        myList.add("lorikeets");
        myList.add("wallabies");
        myList.add("wombats");
        myList.add("kangaroos");

        var items = [];
        var index = 0;

        myList.each(function(data, index){
            items.push(index);
       });

        expect(items).toEqual([0,1,2,3]);
    });

//   it("can replace an item in the list", function(){
//        myList.add("wallaby");
//
//        myList.replace("wallaby","kangaroo");
//
//
//        expect(myList.print()).toBe("kangaroo");
//    });


   it ("can create a new list of values by processing " +
       "each value in the list through a transformative function", function(){
       //see underscore definition of map
       //http://underscorejs.org/#map

       myList.add("Hair Stylist");
       myList.add("Banker");
       myList.add("Social Worker");

       var results = myList.map(function(data){
           return data + ' drinks koolaid';
       });

       expect(results.print()).toEqual("Hair Stylist drinks koolaid, Banker drinks koolaid, Social Worker drinks koolaid");

   });


    it ("can use the index as part of the data", function (){

       myList.add(17);//index = 2
       myList.add(9);//index = 1
       myList.add(20);//index = 0

       var results = myList.map(function(data, index){
           return data + index;
       });

       expect(results.print()).toEqual('19, 10, 20');

    });

    it ("can reduce results", function (){
        /*reduce boils down a list of values into a single value.
        Memo is the initial state of the reduction,
        and each successive step of it should be returned by iterator.
        The iterator is passed four arguments:
        the memo, then the value and index (or key) of the iteration,
        and finally a reference to the entire list.

            var sum = _.reduce([1, 2, 3],
            function(memo, num){
                return memo + num; }, 0);

                .reduce(myList, function(memo, num){
        => 6*/

        //http://ayende.com/blog/4435/map-reduce-a-visual-explanation
            //input and output must be the same
        //http://docs.mongodb.org/manual/core/map-reduce/


        //myList.add(bucket1 = [3,1,10]);

        //expect(myList.print()).toBe("3,1,10");
        myList.add(5);
        myList.add(13);
        myList.add(20);

        //expect(myList.print()).toBe("3,1,10","13","20");

        var results = myList.reduce(function(memo, num){
            return memo + num;
        }, 0);




        expect(results).toEqual(38);



    });




});