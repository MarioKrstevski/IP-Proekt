var user;
var logedIn=false;
var password="finki";
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toDateString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "nebiva";
}

function checkCookie() {
    user=getCookie("username");
    if (user != "") {
        alert("cookies alert!! \n Welcome again " + user);
    } else {
        user = prompt("cookies prompt!! \nPlease enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}

setCookie("user","fiksi",30);

function login() {
    if(!logedIn){

        var username = document.getElementsByName('loginName')[0].value.toString();
        console.log(username);

        var pass = document.getElementsByName("loginPassword")[0].value.toString();
        console.log(pass);
        var cookiename = getCookie("user").toString();
        console.log(cookiename);

        if (cookiename=== username && pass === password){
            logedIn = true;
            console.log('uspesno najaveno');
            document.getElementById('userwelcome').innerHTML = "Welcome FILIP you have logged in";
            $(".hidden").css("display","none");
            $("#mail").css("display","block")




        } else {
            alert("neuspesen login");
        }

    } else {

    }
}

