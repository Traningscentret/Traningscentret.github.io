import { renderHome } from "./home.js";
import { renderAbout } from "./about.js";


const homeLogoButton =
    document.querySelector("#home-logo-button");

const homeButton =
    document.querySelector("#home-button");

const aboutButton =
    document.querySelector("#about-button");

const activitiesButton =
    document.querySelector("#activities-button");

const scheduleButton =
    document.querySelector("#schedule-button");

const pricesButton =
    document.querySelector("#prices-button");

const registrationButton =
    document.querySelector("#registration-button");

const menuButton =
    document.querySelector("#menu-button");

const navMenu =
    document.querySelector("#nav-menu");


menuButton.addEventListener("click", () => {

    const isOpen =
        navMenu.classList.toggle("is-open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuButton.setAttribute(
        "aria-label",
        isOpen
            ? "Stäng meny"
            : "Öppna meny"
    );
});


function closeMenu() {

    navMenu.classList.remove("is-open");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "Öppna meny"
    );
}

homeLogoButton.addEventListener("click", () => {

    renderHome();

    closeMenu();
});


homeButton.addEventListener("click", () => {

    renderHome();

    closeMenu();
});

aboutButton.addEventListener("click", () => {

    renderAbout();

    closeMenu();
});




/* 
   START PAGE
  */

renderHome();