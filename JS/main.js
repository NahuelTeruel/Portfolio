/* import json from "../languages/es.json" assert {type:"json"} */

/* =============== toggle icon navbar =============== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/* =============== scroll section active link =============== */

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* =============== sticky navbar =============== */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* =============== remove toggle icon and navbar =============== */

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* =============== scroll reveal =============== */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/* =============== typed js =============== */

const typed = new Typed('.multiple-text', {
    strings: ['Information Systems Engineering Student', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/* const typedTwo = new Typed('#logo-tecn', {
    strings: [''],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
}); */

/* ================== year =================== */ 

var fecha = new Date();
    var year = fecha.getFullYear();

    // Mostrar el año en el elemento span
    document.getElementById("year").textContent = year;

/*  ================= change language ====================== */
/* const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    console.log(json);
}


const flagsElement = document.getElementById("flags");

flagsElement.addEventListener('click', e => {
    changeLanguage(e.target.parentElement.dataset.language);
    console.log(e.target.parentElement.dataset.language);
}) */