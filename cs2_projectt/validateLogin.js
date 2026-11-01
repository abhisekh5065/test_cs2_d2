function checkLoginDetails() {
    let emailId = document.getElementById("emailId").value;
    let password = document.getElementById("password").value;
   
    if(emailId == "a@b.com" && password == "12345") {
        sessionStorage.setItem("emailId", emailId)
        return true;
    }else {
        console.log("Login failed, please enter valid email id or password")
        return false;
    }
}