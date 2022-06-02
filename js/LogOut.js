const logOut = document.querySelector("#logOut");

logOut.addEventListener("click", () => {

    localStorage.clear()
    setTimeout(() => { window.location = "register.html" }, 1500);
})

