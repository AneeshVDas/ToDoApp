function callMainpage(){
    window.location="MainPage.html";
};

function ValidateLoginPage(){
    var UserName = document.getElementById("UserName");
    var Password = document.getElementById("psw");
    return ValidateandRedirect(UserName, Password, callMainpage);
}

function ValidateandRedirect(UserName, Password, callback){
    if (UserName.value.length == 0) {
        alert("UserName cannot be blank");
        document.getElementById("UserName").focus();
        return false
    }
    if (psw.value.length == 0) {
        alert("Password cannot be blank");
        document.getElementById("psw").focus();
        return false
    }
    if (UserName.value != "admin") {
        alert("Invalid User Name");
        document.getElementById("UserName").focus();
        return false
    }

    
    if (psw.value != "12345") {
        alert("Invalid password");
        document.getElementById("psw").focus();
        return false
    }
    callback();
    return true;
}
