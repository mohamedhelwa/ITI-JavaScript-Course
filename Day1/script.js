/* Question 1.1 */

function q1_1() {
  var str = prompt("Please enter a message: ");

  for (i = 1; i <= 6; i++)
    document.write("<h" + i + " " + "style=\"margin-left: 100px; margin-top: 70px;\">" + str + "</h" + i + ">");
}


/* Question 1.2 */

function q1_2() {
  var n, sum = 0;
  do {
    n = parseInt(prompt("Enter numbers: "));
    sum += n;

    if (sum >= 100)
      break;
  } while (n != 0);

  alert("Sum= " + sum);
}


/* Question 2.1 */

function q2_1() {
  var str = prompt("Enter some text: ");
  var count = str.match(/e/g).length;

  alert("The letter 'e' counts: " + count + " times");
}


/* Question 2.2 */

function q2_2() {
  var str = prompt("Enter some text: ");

  var flag = confirm("Consider Case Sensitivity?");

  if (flag) {
    var re = /[^A-Za-z0-9]/g;

    var lowerStr = str.toLowerCase().replace(re, "");
    var reversedStr = lowerStr.split("").reverse().join("");

    if (reversedStr === lowerStr) 
      alert("Yes a Palindrome");

    else alert("Not a Palindrome");
  }
  else {
    var newStr = str.replace(re, "");
    var reversedStr = newStr.split("").reverse().join("");

    if (reversedStr === newStr) 
      alert("Yes a Palindrome");
      
    else alert("Not a Palindrome");  
  }

}


/* Question 2.3 */

function q2_3() {
  ClearDoc();
  document.write("<h1 style=\"margin-left: 100px; margin-top: 70px;\">Entering user info: </h1> <hr style=\"margin-right: 100px; margin-left: 100px;\">");

  var name = prompt("Enter Your Name: ", "Should be characters, NOT a number");
  if(name.match(/^[A-Za-z]+$/)){
    var phone = prompt("Enter Phone Number: ", "Should be a number, Maximum length = 8");
    if(phone.match(/^\d{8}$/)){
      var mobile = prompt("Enter Mobile Number: ", "Should be a number, Maximum length = 11, Starts with (010|011|012)");
      if(mobile.match(/^01[0-2]{1}[0-9]{8}$/)){
        var email = prompt("Enter Email: ", "Should be \"abc@123.com\"");
        if(email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
          var color = prompt("Your Favorite Color: ", "Red or Green or Blue");

          document.write("<span style=\"margin-left: 100px; margin-top: 70px; color:"+ color + ";font-size: 25px;display:inline-block;\">Welcome dear guest</span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">"+ name +"</span>");
          document.write("<br><span style=\"margin-left: 100px; margin-top: 70px; color:"+ color + ";font-size: 25px;display:inline-block;\">Your telephone number is</span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">"+ phone +"</span>");
          document.write("<br><span style=\"margin-left: 100px; margin-top: 70px; color:"+ color + ";font-size: 25px;display:inline-block;\">Your mobile number is</span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">"+ mobile +"</span>");
          document.write("<br><span style=\"margin-left: 100px; margin-top: 70px; color:"+ color + ";font-size: 25px;display:inline-block;\">Your email address is</span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">"+ email +"</span>");

          document.write("<br><br><br><br><hr style=\"margin-right: 100px; margin-left: 100px;\">");
          document.write("<br><span style=\"margin-left: 100px; margin-top: 20px; color:"+ color + ";font-size: 25px;display:inline-block;\">Today is</span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">"+ new Date() + "</span>");
        }else{
          alert("Please enter a valid Email");
          ClearDoc();
          q2_3();
        }  
      }else{
        alert("Please enter a valid Mobile number");
        ClearDoc();
        q2_3();
      }
    }else{
      alert("Please enter a valid Phone number");
      ClearDoc();
      q2_3();
    }
  }else{
    alert("Please Enter a valid Name");
    ClearDoc();
    q2_3();
  }

}


/* Question 3.1 */

function q3_1(){
  ClearDoc();
  document.write("<h1 style=\"margin-left: 100px; margin-top: 70px;\">Adding -- Multiplying -- dividing 3 values: </h1> <hr style=\"margin-right: 100px; margin-left: 100px;\">");
  var arr = new Array();
  var sum = 0, mul = 1, div = 1;

  arr.push(parseInt(prompt("Enter Number #1: ")));
  arr.push(parseInt(prompt("Enter Number #2: ")));
  arr.push(parseInt(prompt("Enter Number #3: ")));

  for(var i=0; i < arr.length; i++) {                  
    sum += arr[i];
    mul *= arr[i];
    div /= arr[i];
  }

  div = Math.round((div + Number.EPSILON) * 100) / 100          //to round for the first 2 digits
  
  document.write("<br><span style=\"margin-left: 100px; margin-top: 70px; color: red;font-size: 25px;display:inline-block;\">Sum of the 3 values " + arr[0] + "\ + " + arr[1] + "\ + " + arr[2] + "\ = " + "</span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">"+ sum +"</span>");
  document.write("<br><span style=\"margin-left: 100px; margin-top: 70px; color: red;font-size: 25px;display:inline-block;\">Multiplication of the 3 values " + arr[0] + "\ + " + arr[1] + "\ + " + arr[2] + "\ = " + "</span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">"+ mul +"</span>");
  document.write("<br><span style=\"margin-left: 100px; margin-top: 70px; color: red;font-size: 25px;display:inline-block;\">Division of the 3 values " + arr[0] + "\ + " + arr[1] + "\ + " + arr[2] + "\ = " + "</span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">"+ div +"</span>");

}


/* Question 3.2 */

function q3_2(){
  ClearDoc();
  document.write("<h1 style=\"margin-left: 100px; margin-top: 70px;\">Sorting: </h1> <hr style=\"margin-right: 100px; margin-left: 100px;\">");
  var arr = new Array();

  arr.push(parseInt(prompt("Enter Number #1: ")));
  arr.push(parseInt(prompt("Enter Number #2: ")));
  arr.push(parseInt(prompt("Enter Number #3: ")));
  arr.push(parseInt(prompt("Enter Number #4: ")));
  arr.push(parseInt(prompt("Enter Number #5: ")));

  document.write("<br><span style=\"margin-left: 100px; margin-top: 70px; color: red;font-size: 25px; display:inline-block;\">You've entered the values of </span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">" + arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3] + ", " + arr[4] + "</span>");

  document.write("<br><span style=\"margin-left: 100px; margin-top: 70px; color: red;font-size: 25px; display:inline-block;\">Your values after being sorted DESCending: </span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">" + arr.sort(function(a, b){return b-a}) + "</span>");
  document.write("<br><span style=\"margin-left: 100px; margin-top: 70px; color: red;font-size: 25px; display:inline-block;\">Your values after being sorted ASCending: </span>" + "<span style=\"font-size: 25px; margin-left: 10px;\">" + arr.sort(function(a, b){return a-b}) + "</span>");

}



/* Question 4 */

function q4(){
  ClearDoc();

  var radius = parseInt(prompt("What is the value of your circle's radius: ", "Type radius here"));
  
  var circleArea = Math.PI * radius * radius;

  alert("Total area of the circle is = " + circleArea.toFixed(2));



  var value = parseInt(prompt("What is the value you want to calculate its square root: ", "Type your value here"));

  alert("Square root of " + value + " is = " + Math.sqrt(value));



  var angle = parseInt(prompt("What is the angle you want to calculate its COS value: ", "Type your value here"));

  var cos = Math.cos(angle * Math.PI / 180);;

  document.write("<h3 style=\"margin-top: 100px; margin-left: 100px;\">COS " + angle + "&deg; is = " + cos.toFixed(4) + "</h3>");
  
}


/* Empty Screen after every question */

function ClearDoc () {
  document.open ();
  document.close ();
}