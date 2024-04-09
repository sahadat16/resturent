const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("Open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("Open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});



// const scrollRevealOption = {
//     distance: "50px",
//     origin: "bottom",
//     duration: 1000,
// };

// scrollReveal().reveal("header__image img", {
//     ...scrollRevealOption,
//     origin: "right",
// });
// scrollReveal().reveal(".header__content h1", {
//     ...scrollRevealOption,
//     delay: 500,
// });
// scrollReveal().reveal(".header__content .section__description", {
//     ...scrollRevealOption,
//     delay: 1000,
// });
// scrollReveal().reveal(".header__content .header__btn", {
//     ...scrollRevealOption,
//     delay: 1500,
// });

// scrollReveal().reveal("explore__image img", {
//     ...scrollRevealOption,
//     origin: "left",
// });
// scrollReveal().reveal(".explore__content .section__header", {
//     ...scrollRevealOption,
//     delay: 500,
// });
// scrollReveal().reveal(".explore__content .section__description", {
//     ...scrollRevealOption,
//     delay: 1000,
// });
// scrollReveal().reveal(".explore__content .explore__btn", {
//     ...scrollRevealOption,
//     delay: 1500,
// });

// scrollReveal().reveal(".banner__card", {
//     ...scrollRevealOption,
//     interval: 500,
// });

// scrollReveal().reveal("chef__mage img", {
//     ...scrollRevealOption,
//     origin: "right",
// });
// scrollReveal().reveal(".chef__content .section__header", {
//     ...scrollRevealOption,
//     delay: 500,
// });
// scrollReveal().reveal(".chef__content .section__description", {
//     ...scrollRevealOption,
//     delay: 1000,
// });
// scrollReveal().reveal(".chef__list li", {
//     ...scrollRevealOption,
//     delay: 1500,
//     interval: 500,
// });



const swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },
});