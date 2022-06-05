// import Variables
const logOut = document.querySelector("#logOut");

// Log out and delete data
logOut.addEventListener("click", () => {
    localStorage.clear();
    setTimeout(() => { window.location = "register.html" }, 1500);
})

