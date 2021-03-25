/* Question A.1.1 */
/* Flying Window */

var myWindow;
var interval;
var x = 0, y = 0;

function createFlying() {
  myWindow = window.open("./flyingChild.html", "", "width=200,height=100");
  interval = setInterval(moveChild, 80);
}

function moveChild() {
  if(myWindow.screenX == 0){
    x = 10;
    y = 10;
  }
  else if(myWindow.screenX == 670){
    x = -10;
    y = -10;
  }

  myWindow.moveBy(x, y);
  myWindow.focus();
}

function stopWindow() {
  clearInterval(interval);
  myWindow.focus();
}



/* Question A.1.2 */
/* character By Character Message */

var myWindow2;
var interval2;
var i = 0, j = 0;

function createMessage() {
  myWindow2 = window.open("./messageChild.html", "", "width=600,height=300");
  interval2 = setInterval(typeMessage, 100);
}

function typeMessage() {
  var str = "Your Message Will Be Displayed Character By character :)";

  if(i < str.length)
    myWindow2.document.write(str[i++]);
  else
    interval2 = setInterval(closeMessageWindow, 1000);
}

function closeMessageWindow() {
  var str2 = "<br>Few seconds and this window will terminate...";

  if(j < str2.length){
    myWindow2.document.write(str2[j++]);
  }
  clearInterval(interval2);
  setTimeout(function(){
      myWindow2.close();},7000);
}



/* Question A.1.3 */
/* Scrollable Window */

var myWindow3;

function createScrollable(){
  myWindow3 = window.open("./scrollableChild.html", "", "width=900,height=500");
  setInterval(scrollWin, 150);
}

function scrollWin() {
  myWindow3.scrollBy(0, 10);
}


/* Question A.2.1 */
/* Registration & Welcoming Message */

// --> Script in the register.html page <--



/* Question A.3.1 */
/* Calculator */

var flag = false; 

function EnterNumber(number){
  if(flag){
    document.getElementById("Answer").value = "";
    var digits = document.getElementById("Answer").value += number;
  }
  else{
    var digits = document.getElementById("Answer").value += number;
  }
  flag = false;
}

function EnterOperator(operator){
  var op = document.getElementById("Answer").value += operator;
}

function EnterEqual(){
  var result = eval(document.getElementById("Answer").value);
  document.getElementById("Answer").value = result;
  flag = true;
}

function EnterClear(){
  document.getElementById("Answer").value = "";
}



/* Question A.3.2 */
/* Photo Gallery */

var imgNumber = 0;
var path = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg"];
var numberOfImg = path.length;
var timer = null;

function slide() {
  imgNumber = (imgNumber + 1) % path.length;
  document.getElementById("imgSlideshow").src = path[imgNumber];
}

function setTimer() {
  timer = setInterval(slide, 2000);
  return false;
}

function previousImage() {
  while(imgNumber != 0){
    --imgNumber;
    if (imgNumber < 0) {
      imgNumber = numberOfImg - 1;
    }
    document.getElementById("imgSlideshow").src = path[imgNumber];
    return false;
  }
}

function nextImage() {
  while(imgNumber != numberOfImg-1){
    ++imgNumber;
    if (imgNumber > (numberOfImg - 1)) {
      imgNumber = 0;
    }
    document.getElementById("imgSlideshow").src = path[imgNumber];
    return false;
  }
}

function stop(){
  clearInterval(timer);
}




/* Question A.3.3 */
/* Marbles */

// --> Script in the marbles.html page <--



/* Question B.1 */
/* Text Style */

function ChangeFont(fontName){
  document.getElementById("PAR").style.fontFamily = fontName;
}

function ChangeAlign(alignValue){
  document.getElementById("PAR").style.textAlign = alignValue;
}

function ChangeHeight(height){
  document.getElementById("PAR").style.lineHeight = height;
}

function ChangeLSpace(space){
  document.getElementById("PAR").style.letterSpacing = space;
}

function ChangeIndent(indent){
  document.getElementById("PAR").style.textIndent = indent;
}

function ChangeTransform(transform){
  document.getElementById("PAR").style.textTransform = transform;
}

function ChangeDecorate(decoration){
  document.getElementById("PAR").style.textDecoration = decoration;
}

function ChangeBorder(borderValue){
  document.getElementById("PAR").style.border = borderValue;
}

function ChangeBorderColor(borderColor){
  document.getElementById("PAR").style.borderColor = borderColor;
}



/* Question B.2 */
/* DOM Node */

// --> Script in the DOM_Node.html page <--



/* Question B.3 */
/* Moving Pics */

// --> Script in the movingPics.html page <--

