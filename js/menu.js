function resize() { //694 browser width will show the original menu, if user click the hamburger before, the function will uncheck it
    var w = innerWidth;

    if (w > 694) {
        document.getElementById("toggle").checked = false;
    }
}

function displaySignIn() { //show the Sign in form
    var x = document.getElementById("loginform-container");

    x.style.display = "block";
    document.getElementById("toggle").checked = false;
}

function hideSignIn() { //Hide the sign in form
    var x = document.getElementById("loginform-container");
    x.style.display = "";
    document.getElementById("incorrect").innerHTML = "";
}


function login() { //Validate the login data
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "admin")
        loginSuccessful();
    else
        loginUnSuccessful();
}

var count = 3;

function loginUnSuccessful() { //Show the login message and alert
    document.getElementById("incorrect").style.color = "red";
    document.getElementById("incorrect").innerHTML = "Incorrect Username/Password! Please input again! You still can login " + --count + " times.";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    if (count == 0) {
        alert("Login Unsuccessful!\n\n" + "Please contact admin!\n\n" + "Press [OK] to redirect to the page.");
        hideSignIn();
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
    }
}

function loginSuccessful() {
    alert("Login Successful!\n\n" + "Press [OK] to redirect to the page.")
    location.reload();
}