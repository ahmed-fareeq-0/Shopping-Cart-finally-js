// import input register 
const reg_userName = document.querySelector("#register-input-userName");
const reg_email = document.querySelector("#register-input-email");
const reg_psd = document.querySelector("#register-input-psd");
const reg_psd2 = document.querySelector("#register-input-psd2");
const reg_btn = document.querySelector("#registr-btn");


// Record data and save it to localstorage
reg_btn.addEventListener("click", (e) => {
    e.preventDefault()

    if (reg_userName.value === "" || reg_email.value === "" || reg_psd.value === "" || reg_psd2.value === "") {
        alert("please full data");

    } else if (reg_psd.value !== reg_psd2.value) {
        alert("Wrong password matching");

    } else {
        localStorage.setItem("userName", reg_userName.value);
        localStorage.setItem("email", reg_email.value);
        localStorage.setItem("psd", reg_psd.value);
        localStorage.setItem("psd2", reg_psd2.value);
        setTimeout(() => { window.location = "login.html" }, 1500);
    }
})




