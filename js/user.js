let reg_log_nav = document.querySelector(".nav-links");
let userDom = document.querySelector("#userDom");
let user_info = document.querySelector("#user_info");
let getUserName = localStorage.getItem("userName");

// Verify username and add name in Navbar
if (getUserName) {
    reg_log_nav.remove();
    user_info.style.display = "flex";
    userDom.innerHTML = getUserName;
}


let logOut = document.querySelector("#logOut");

// Log out and delete data
logOut.addEventListener("click", () => {
    localStorage.clear();
    setTimeout(() => { window.location = "register.html" }, 1500);
})

