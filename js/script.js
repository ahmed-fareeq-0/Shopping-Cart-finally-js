var reg_log_nav = document.querySelector(".nav-links");
var userDom = document.querySelector("#userDom");
var user_info = document.querySelector("#user_info");

let getUserName = localStorage.getItem("userName");

if(getUserName) {
    reg_log_nav.remove()
    user_info.style.display = "flex"
    userDom.innerHTML = getUserName
}