const authBox =
document.querySelector(".auth-box");

const showRegister =
document.querySelector("#showRegister");

const showLogin =
document.querySelector("#showLogin");

showRegister.addEventListener("click",(e)=>{

    e.preventDefault();

    authBox.classList.add("active");

});

showLogin.addEventListener("click",(e)=>{

    e.preventDefault();

    authBox.classList.remove("active");

});

/* LOGIN PASSWORD */

const loginPassword =
document.querySelector("#loginPassword");

const loginToggle =
document.querySelector("#loginToggle");

loginToggle.addEventListener("click",()=>{

    loginPassword.type =
    loginPassword.type === "password"
    ? "text"
    : "password";

});

/* REGISTER PASSWORD */

const registerPassword =
document.querySelector("#registerPassword");

const registerToggle =
document.querySelector("#registerToggle");

registerToggle.addEventListener("click",()=>{

    registerPassword.type =
    registerPassword.type === "password"
    ? "text"
    : "password";

});