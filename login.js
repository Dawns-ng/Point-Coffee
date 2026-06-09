/* ================================= */
/* PASSWORD TOGGLE */
/* ================================= */

const passwordInput =
document.querySelector("#password");

const togglePassword =
document.querySelector("#togglePassword");

togglePassword.addEventListener("click",()=>{

    const type =
    passwordInput.getAttribute("type") === "password"
    ? "text"
    : "password";

    passwordInput.setAttribute("type",type);

});