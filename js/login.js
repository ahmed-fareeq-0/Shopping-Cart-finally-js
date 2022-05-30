// import input login
const login_userName = document.querySelector("#login-input-userName");
const login_psd = document.querySelector("#login-input-psd");
const login_btn = document.querySelector("#login-btn");


login_btn.addEventListener("click", (e) => {
    e.preventDefault()

    let getUser = localStorage.getItem("userName");
    let getpsd = localStorage.getItem("psd");

    if (login_userName.value === "" || login_psd.value === "") {
        alert("please full data")

    } else {
        if ((getUser && getUser.trim() === login_userName.value) && (getpsd && getpsd === login_psd.value)) {

            setTimeout(() => { window.location = "index.html" }, 1500)

        } else { alert("There is no account with this name") }
    }


})









