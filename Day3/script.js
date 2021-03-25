/* Question A.1 */
/* Cookies */

function setCookie(cookieName, cookieValue, expiryDate){
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiryDate;
}

function deleteCookie(cookieName){
    document.cookie = cookieName + "=; expires=1-1-2017";
}

function allCookieList(){
    var associativeCookies = [];
    var splitted = document.cookie.split(";");

    for(var i = 0; i < splitted.length; i++){
        associativeCookies[splitted[i].split("=")[0].trim()] = splitted[i].split("=")[1];
    }
    return associativeCookies;
}

function getCookie(cookieName){
    return allCookieList()[cookieName];
}

function hasCookie(cookieName){
    var cookiesList = showCookieList();
    for(cookie in cookiesList){
        if(cookie == cookieName){
            return true;
        }
        return false;
    }
}

function saveInfo(){
    var date = new Date();
    date.setMonth(date.getMonth() + 3);
    var gender;

    var name = document.getElementById("name").value;
    var age  = document.getElementById("age").value;

    var radioValue = document.querySelectorAll('input[name="gender"]');
    if(radioValue[0].checked){
        gender = "Male";
    }
    else{
        gender = "Female";
    }

    var colorIndex = document.getElementById("color").selectedIndex;
    var colorName = document.getElementById("color").options[colorIndex].value;

    setCookie("Name", name, date);
    setCookie("Age", age, date);
    setCookie("Gender", gender, date);
    setCookie("Color", colorName, date);


    var visitsCounter = 0;
    setCookie("Counter", visitsCounter, date);

    location.assign("./profile.html");
}

function profileDisplay(){
    var name = getCookie("Name");

    var gender = getCookie("Gender");
    if(gender == "Female"){
        document.getElementById("genderImage").src="./images/2.jpg";
    }

    var color = getCookie("Color");

    var visits = getCookie("Counter");

    var nameSpan = document.getElementById("name");
    nameSpan.style.color = color;

    var counterSpan = document.getElementById("counter");
    counterSpan.style.color = color;


    var date = new Date();
    date.setMonth(date.getMonth() + 3);

    setCookie("Counter", ++visits, date);

    nameSpan.innerHTML = name;
    counterSpan.innerHTML = visits;
}



/* Question B.1 */
/* Alert ASCII */

function detectKey(event){
    var code = event.keyCode;

    if(code == 16){
        alert("ASCII = " + code + "\nShift pressed!");
    }
    else if(code == 17){
        alert("ASCII = " + code + "\nCtr pressed!");
    }
    else if(code == 18){
        alert("ASCII = " + code + "\nAlt pressed!");
    }
    else{
        document.getElementById("showingArea").innerHTML = "ASCII = " + code;
    }
}



/* Question B.2 */
/* Context Menu */

// --> Script in the contextMenu.html page <--



/* Question B.3 */
/* Context Menu */

// --> Script in the submitForm.html page <--
