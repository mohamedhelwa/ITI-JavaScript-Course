/* Question A.1 */
/* Error Handling */

onerror = errorHandle;

function errorHandle(message){
    return message;
}


function getCookie(cookieName){
    if(arguments.length != 1 || cookieName == null){
        throw onerror("getCookie() must have only 1 parameter");            // Firing new error message
    }
    else{
        return allCookieList()[cookieName];
    }
}



/* Day 3 Cookies Library */

function setCookie(cookieName, cookieValue, expiryDate){
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiryDate;
}

// function getCookie(cookieName){
//     return allCookieList()[cookieName];
// }

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

    var color = getCookie("Color");                         // remove arguments for testing and firing new error message 

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

