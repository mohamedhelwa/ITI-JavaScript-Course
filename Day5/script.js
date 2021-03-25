/*
        Eng. Amira mail  : amiramahana96@gmail.com
        Eng. Amira mobile: 01095743814
        Google Drive Link: https://drive.google.com/drive/folders/1A0Y8SkYViX4ND-T3MhyayN6X-s6Y9FE8?usp=sharing
*/

/* Error Handling Library */

onerror = errorHandle;

function errorHandle(message) {
  return message;
}

/* Question 1 */
/* Sequence List */

function myList(startValue, endValue, stepValue) {
  var list = [];
  var start = startValue;
  var end = endValue;
  var step = stepValue;

  (function fillList() {
    for (var i = start; i <= end; i += step) {
      list.push(i);
    }
  })();

  this.getStart = function () {
    return start;
  };
  this.getEnd = function () {
    return end;
  };
  this.getStep = function () {
    return step;
  };
  this.getList = function () {
    return list;
  };

  Object.defineProperties(this, {
    start: {
      value: this.getStart(),
      writable: false,
      enumerable: false,
      configurable: false,
    },
    end: {
      value: this.getEnd(),
      writable: false,
      enumerable: false,
      configurable: false,
    },
    step: {
      value: this.getStep(),
      writable: false,
      enumerable: false,
      configurable: false,
    },
    list: {
      value: this.getList(),
      writable: false,
      enumerable: false,
      configurable: false,
    },
  });
}

myList.prototype.appendValue = function (value) {
  var myStep = this.getEnd() + this.getStep();
  var tempList = this.getList();

  if (value == myStep) {
    tempList.push(value);
  } else {
    throw onerror("Entered value isn't sequential!");
  }
};

myList.prototype.prependValue = function (value) {
  var myStep = this.getStart() - this.getStep();
  var tempList = this.getList();

  if (value == myStep) {
    tempList.unshift(value);
  } else {
    throw onerror("Entered value isn't sequential!");
  }
};

myList.prototype.pop = function () {
  var tempList = this.getList();
  tempList.pop();
};

myList.prototype.dequeue = function () {
  var tempList = this.getList();
  tempList.shift();
};

myList.prototype.displayAll = function () {
  document.write(this.getList() + "<br>");
};

function test1() {
    ClearDoc();

    var ls = new myList(1, 11, 2);
    document.write("Start = 1 & End = 11 & Step = 2 :<br>");
    ls.displayAll();    

    document.write("<br>Append 13 :<br>");
    ls.appendValue(13);
    ls.displayAll();
    
    //ls.appendValue(12);   // will throw Error for sequence
    document.write("<br>Prepend -1 :<br>");
    ls.prependValue(-1);
    ls.displayAll();

    //ls.prependValue(0);   // will throw Error for sequence
    document.write("<br>Using pop() will remove '13' :<br>");
    ls.pop();
    ls.displayAll();

    document.write("<br>Using Dequeue() will remove '-1' :<br>");
    ls.dequeue();
    ls.displayAll();

    var buttonStr = "<br><br><hr> <button type=\"button\" onclick=\"window.location.href='./index.html'\" style=\"margin-top: 100px; margin-left: 200px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; width: 100px; font-size: 20px; font-weight: bold;\">Back</button>";
    document.write(buttonStr);
}

////////////////////////////////////////////////////////////////////////////////////

// /* Question 2 */
// /* Rectangle Area &  perimeter */

var objectCounter = 0;

function Rectangle(w, h) {
  this.width = w;
  this.height = h;

  objectCounter++;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function () {
  return "Width = " + this.width + ", Height = " + this.height
        + "<br><br>Area = " + this.area() + "<br> Perimeter = " + this.perimeter();
};

Rectangle.getObjectCounter = function () {
  return objectCounter;
};


function test2() {
    ClearDoc();

    var myRectangle1 = new Rectangle(3, 9);
    document.write("Rectangle #" + objectCounter + ":<br>" + myRectangle1.toString() + "<br><hr>");

    var myRectangle2 = new Rectangle(10, 20);
    document.write("Rectangle #" + objectCounter + ":<br>" +  myRectangle2.toString() + "<br><hr>");

    var myRectangle3 = new Rectangle(100, 125);
    document.write("Rectangle #" + objectCounter + ":<br>" + myRectangle3.toString() + "<br><hr>");

    var myRectangle4 = new Rectangle(20, 35);
    document.write("Rectangle #" + objectCounter + ":<br>" +  myRectangle4.toString() + "<br><hr>");

    var myRectangle5 = new Rectangle(7, 12);
    document.write("Rectangle #" + objectCounter + ":<br>" +  myRectangle5.toString() + "<br><hr>");


    document.write("<hr>Number of created objects till now = " + Rectangle.getObjectCounter() + "<hr>");


    var buttonStr = "<hr> <button type=\"button\" onclick=\"window.location.href='./index.html'\" style=\"margin-top: 100px; margin-left: 200px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; width: 100px; font-size: 20px; font-weight: bold;\">Back</button>";
    document.write(buttonStr);
}

//////////////////////////////////////////////////////////////////////////////////

/* Question 3 */
/* Shape and Square */

var rectanglesCounter = 0;
var squareCounter = 0;

function Shape(w, h) {
  if (this.constructor == Shape) {
      throw onerror("You can't create Shape objects!");
  }  
  this.width = w;
  this.height = h;
}

function NewRectangle(w, h) {
  if (rectanglesCounter != 0 && this.constructor == NewRectangle) {
      throw onerror("You can create only 1 Rectangle object!");   
  }
  Shape.call(this, w, h);
  rectanglesCounter++;
}

function Square(x) {
  if (squareCounter != 0 && this.constructor == Square) {
      throw onerror("You can create only 1 Square object!");   
  }
  NewRectangle.call(this, x, x);
  squareCounter++;
}

NewRectangle.prototype = Object.create(Shape.prototype);
NewRectangle.prototype.constructor = NewRectangle;

Square.prototype = Object.create(NewRectangle.prototype);
Square.prototype.constructor = Square;

NewRectangle.prototype.area = function () {
  return this.width * this.height;
};

NewRectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

NewRectangle.prototype.toString = function () {
    return "Width = " + this.width + ", Height = " + this.height
        + "<br><br>Area = " + this.area() + "<br> Perimeter = " + this.perimeter();
};

NewRectangle.getObjectCounter = function () {
  return rectanglesCounter;
};



function test3() {
    ClearDoc();

    var myNewRectangle1 = new NewRectangle(10, 20);
    document.write("Rectangle: <br>" + myNewRectangle1.toString() + "<br><hr>");

    //var myNewRectangle2 = new Rectangle(10, 20);     // will throw Error for creating more than one Rectangle object

    var mySquare1 = new Square(5);
    document.write("Square: <br>" + mySquare1.toString() + "<br><hr>");

    //var mySquare2 = new Square(20);                 // will throw Error for creating more than one Square object

    document.write("<hr>Number of created objects till now = " + NewRectangle.getObjectCounter() + "<hr>");


    var buttonStr = "<hr> <button type=\"button\" onclick=\"window.location.href='./index.html'\" style=\"margin-top: 100px; margin-left: 200px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; width: 100px; font-size: 20px; font-weight: bold;\">Back</button>";
    document.write(buttonStr);
}



//////////////////////////////////////////////////////////////////////////////////

/* Question 4 */
/* Box for Books */

var boxCounter = 0;
function Box(_height, _width, _material) {
    this.height = _height;
    this.width = _width;
    this.material = _material;
    this.content = [];
    boxCounter++;

    this.numOfBooks = function () {
        return this.content.length;
    };

    this.addBook = function (Book) {
        this.content.push(Book);
    };

    this.deleteBook = function (bookTitle) {
        for (var i = 0; i < this.content.length; i++) {
            if (bookTitle == this.content[i].title) {
                document.write("Book Deleted Successfully!<br><hr>");
                this.content.splice(i, 1);
            }
        }
    };

    this.displayAll = function () {
        return this.content;
    };
}

Box.prototype.valueOf = function () {
    return this.numOfBooks();
};

Box.prototype.toString = function () {
    return "Box #" + boxCounter + " dimensions: <br>Height = " + this.height + "<br>Width = " + this.width 
        + "<br>its Made from: " + this.material
        + "<br>And it Contains: " + this.numOfBooks() + " Books.<br><hr>";
};

Box.valueOf = function(box1, box2) {
    return box1.numOfBooks() + box2.numOfBooks();
};

function Book(_title, _numOfChapters, _author, _numOfPages, _publisher, _numOfCopies) {
    this.title = _title;
    this.numOfChapters = _numOfChapters;
    this.author = _author;
    this.numOfPages = _numOfPages;
    this.publisher = _publisher;
    this.numOfCopies = _numOfCopies;
}


function test4() {
    ClearDoc();
    /* Box 1 Test */

    var myBox1 = new Box(100, 300, "Plastic");

    var book1 = new Book("HTML5 & CSS3", 10, "Mohamed", 1000, "ABC", 200);
    var book2 = new Book("JavaScript", 15, "Ali", 2000, "XYZ", 250);
    var book3 = new Book("OOP using C Sharp", 20, "Omar", 3000, "ABC", 300);
    var book4 = new Book("DataBase Fundamentals", 25, "Ahmed", 4000, "XYZ", 350);
    var book5 = new Book("Mobile Development", 30, "Mona", 5000, "ABC", 400);

    myBox1.addBook(book1);
    myBox1.addBook(book2);
    myBox1.addBook(book3);
    myBox1.addBook(book4);
    myBox1.addBook(book5);

    document.write(myBox1.toString());


    /* Box 2 Test */

    var myBox2 = new Box(250, 500, "Glass");

    var book6 = new Book("Artificial Intelligence", 40, "Gamal", 6000, "XYZ", 450);
    var book7 = new Book("Computer Networks", 50, "Osman", 7000, "ABC", 500);
    var book8 = new Book("Machine Learning", 60, "Kamel", 8000, "XYZ", 550);
    var book9 = new Book("Computer Graphics", 70, "Maged", 9000, "ABC", 600);

    myBox2.addBook(book6);
    myBox2.addBook(book7);
    myBox2.addBook(book8);
    myBox2.addBook(book9);

    document.write(myBox2.toString());

    /* Value of function Test */
    document.write("Using ValueOf() to add boxes: <br>");
    document.write("Value of Box1 + Box2 = " + Box.valueOf(myBox1, myBox2) + "<br><hr>");



    document.write("Box #1 Content:<br><br>");
    /* Display all box content after delete Test */
    for(var i =0; i <myBox1.content.length; i++ ){
        document.write(JSON.stringify(myBox1.displayAll()[i])+"<br>");
    }
    
    /* Delete book by book title Test */
    document.write("<br><hr>Using DeleteBook(\"JavaScript\") will remove JavaScript Book :<br>");
    myBox1.deleteBook("JavaScript");

    document.write("Box #1 Content after delete:<br><br>");
    /* Display all box content after delete Test */
    for(var i =0; i <myBox1.content.length; i++ ){
        document.write(JSON.stringify(myBox1.displayAll()[i])+"<br>");
    }
    
    var buttonStr = "<hr> <button type=\"button\" onclick=\"window.location.href='./index.html'\" style=\"margin-top: 50px; margin-left: 200px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; width: 100px; font-size: 20px; font-weight: bold;\">Back</button>";
    document.write(buttonStr);

}



/* Empty Screen after every question */

function ClearDoc() {
    document.open ();
    document.close ();
  }