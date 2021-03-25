/* Error Handling Library */

onerror = errorHandle;

function errorHandle(message){
    return message;
}


/* Question B.1 */
/* Custom LinkedList Object */



//////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Question B.2 */
/* Rectangle Object */

function rectangle(width, height){
    this.width = width;
    this.height = height;

    this.area = function() { 
        return this.width * this.height; 
    }

    this.perimeter = function() { 
        return 2 * (this.width + this.height); 
    }

    this.displayInfo = function() { 
        return "Width = " + this.width + "<br>Height = " + this.height +
                "<br>Area =  " + this.area() + "<br>Perimeter = " + this.perimeter();
    }
}


function test_B2(){
    ClearDoc();
    var w = 10, h = 20;
    var rec = new rectangle(w, h);

    document.write(rec.displayInfo());

    var buttonStr = "<br><br><hr> <button type=\"button\" onclick=\"window.location.href='./index.html'\" style=\"margin-top: 100px; margin-left: 200px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; width: 100px; font-size: 20px; font-weight: bold;\">Back</button>";
    document.write(buttonStr);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Question C.1 */
/* Only 2 Parameters */

function fun(x, y){
    if(arguments.length != 2){
        throw onerror("Function must have only 2 parameters!");           // Firing new error message if arguments < 2
    }
    else
        return "First Parameter = " + x + "<br> Second Parameter = " + y;
}

function test_C1(){
    ClearDoc();
    document.write(fun(2,3));
    // document.write(fun());               // call with 1 argument for testing and firing new error message 
    // document.write(fun(2,3,4));         // call with more than 2 arguments for testing and firing new error message 

    var buttonStr = "<br><br><hr> <button type=\"button\" onclick=\"window.location.href='./index.html'\" style=\"margin-top: 100px; margin-left: 200px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; width: 100px; font-size: 20px; font-weight: bold;\">Back</button>";
    document.write(buttonStr);
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Question C.2 */
/* Adding function */

function add(){
    var sum = 0;
    if(arguments.length == 0){
        throw onerror("Add function must have at least 1 parameter!"); // Firing new error message if called without arguments
    }
    else{
        for (i = 0; i < arguments.length; i++){
            if(isNaN(arguments[i])){
                // Firing new error message if passed NaN arguments
                throw onerror("Add function must have Number parameters only!");
            }
            else
                sum += arguments[i];
        }
    }
    return "Sum = " + sum;
}

function test_C2(){
    ClearDoc();
    document.write(add(2,4));
    // document.write(add());                    // call without arguments for testing and firing new error message 
    // document.write(add("test"));             // call with string arguments for testing and firing new error message 

    var buttonStr = "<br><br><hr> <button type=\"button\" onclick=\"window.location.href='./index.html'\" style=\"margin-top: 100px; margin-left: 200px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; width: 100px; font-size: 20px; font-weight: bold;\">Back</button>";
    document.write(buttonStr);
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Question C.3 */
/* Reverse function's arguments */


/* Reverse function 1 */
function reverseArgs(){
    var args = [];
    if(arguments.length != 0){
        for(var i = 0; i < arguments.length; i++){
            args[i] = arguments[i];
        }
    } else {
        throw onerror("Enter parameters to reverse");
    }
    return "<br>Reversed with Function #1: <br>" + args.reverse();
}


/* Reverse function 2 */
function reverseArgs2(){                
    var reversed;
    if(arguments.length != 0){
        reversed  = [].slice.call(arguments).reverse();
    } else {
        throw onerror("Enter parameters to reverse");
    }
    return "<br>Reversed with Function #2: <br>" + reversed;
}

function test_C3(){
    ClearDoc();
    document.write(reverseArgs(1, 2, 3, 4, 5, 6));              // Test reverse function number #1 
    document.write(reverseArgs2(1, 2, 3, 4, 5, 6, 7, 8, 9));    // Test reverse function number #2

    var buttonStr = "<br><br><hr> <button type=\"button\" onclick=\"window.location.href='./index.html'\" style=\"margin-top: 100px; margin-left: 200px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; width: 100px; font-size: 20px; font-weight: bold;\">Back</button>";
    document.write(buttonStr);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Question C.4 */
/* Setter & Getter Generator */

var myObject = { id: 52136,
                 name: "Mohamed",
                 address: "Giza",
                 getSetGenerator: function(){
                        var atr = [], i = 0;
                        for(item in this){
                            if(!(typeof this[item] == 'function')){
                                atr[i++] = item;
                            }
                        }
                        for(var j = 0; j < atr.length; j++){
                            Object.defineProperty(this, 'get' + atr[j], {value: (function (n){
                                return function(){
                                    return this[atr[n]];
                                }
                            })(j)});

                            Object.defineProperty(this, 'set' + atr[j], {value: (function (n){
                                return function(value){
                                    return this[atr[n]] = value;
                                }
                            })(j)});
                        }
                 }
};

myObject.getSetGenerator();                            // call the Generator function for testing

var test = { id: 12345,                               // create new object to test the Generator function on it
             name: "ALi",
             age: 10,
             address: "Cairo",
             testFunction: function(){
                 console.log("testing");
             }
};

myObject.getSetGenerator.apply(test);                // apply on the new object to test the Generator function

function test_C4(){
    ClearDoc();
    document.write("See the results from the Console");
    document.write("<br> You can now set and get the attributes of object");

    console.log(myObject);
    console.log("Changing id to = " + myObject.setid(12));
    console.log("New id now when calling \'myObject.getid();\' will =  "+ myObject.getid());


    var buttonStr = "<br><br><hr> <button type=\"button\" onclick=\"window.location.href='./index.html'\" style=\"margin-top: 100px; margin-left: 200px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; width: 100px; font-size: 20px; font-weight: bold;\">Back</button>";
    document.write(buttonStr);
}

/* Empty Screen after every question */

function ClearDoc() {
    document.open ();
    document.close ();
  }