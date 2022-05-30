var reg_log_nav = document.querySelector(".nav-links");
var userDom = document.querySelector("#userDom");
var user_info = document.querySelector("#user_info");

var login_userName = document.querySelector("#login-input-userName");

let getUserName = localStorage.getItem("userName");

if(getUserName) {
    reg_log_nav.remove()
    user_info.style.display = "block"
    userDom.innerHTML = getUserName
}