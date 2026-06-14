/* ================================= */
/* HAMBURGER MENU */
/* ================================= */

const hamburgerBtn =
document.querySelector("#hamburger-menu");

const hamburgerPanel =
document.querySelector(".hamburger-panel");

const menuOverlay =
document.querySelector(".menu-overlay");

hamburgerBtn.addEventListener("click", function(e){

    e.preventDefault();

    hamburgerBtn.classList.toggle("active");
    hamburgerPanel.classList.toggle("active");
    menuOverlay.classList.toggle("active");

});

/* CLOSE WHEN CLICK OVERLAY */

menuOverlay.addEventListener("click", function(){

    hamburgerBtn.classList.remove("active");
    hamburgerPanel.classList.remove("active");
    menuOverlay.classList.remove("active");

});

/* CLOSE WHEN PRESS ESC */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        hamburgerBtn.classList.remove("active");
        hamburgerPanel.classList.remove("active");
        menuOverlay.classList.remove("active");

    }

});

/* CLOSE WHEN CLICK OUTSIDE */

document.addEventListener("click", function(e){

    if(
        !hamburgerPanel.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
    ){

        hamburgerBtn.classList.remove("active");
        hamburgerPanel.classList.remove("active");
        menuOverlay.classList.remove("active");

    }

});

// FLOATING ACCOUNT
const accountBtn =
document.querySelector("#accountBtn");

accountBtn.addEventListener("click", () => {

    window.location.href = "/Point Coffee/Halaman Login/login.html";

});