let username = document.getElementById("username");
let password = document.getElementById("password");
let x = 0;

function myfunction() {
    if (username.value == "") {
        document.getElementById("usererror").innerHTML = "Username is Emty";
        x = 0;
    } else if (username.value.length < 3) {
        document.getElementById("usererror").innerHTML = "username require min 3 cha!";
        x = 0;
    } else {
        document.getElementById("usererror").innerHTML = "";
        x = 1;
    }


    if (password.value == "") {
        document.getElementById("passerror").innerHTML = "Password is Emty";
        x = 0;
    }
    else {
        document.getElementById("passerror").innerHTML = "";
        x = 1
    }

    if (x) {
        return true;
    } else {
        return false;
    }

}