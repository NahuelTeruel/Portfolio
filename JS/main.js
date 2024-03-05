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

/* ================== year =================== */ 

var fecha = new Date();
    var year = fecha.getFullYear();

    // Mostrar el año en el elemento span
    document.getElementById("year").textContent = year;

/* =================== Contac ====================== */

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#truco')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    /* console.log(form.get('name'),form.get('email'),form.get('number'),form.get('asunto'),form.get('message')) */
    $buttonMailto.setAttribute('href', `mailto:teruelnahuel10@gmail.com?subject=#Nombre: ${form.get('name')} #Motivo: ${form.get('asunto')}&body=#Número: ${form.get('number')} #Mensaje: ${form.get('message')}`)
    $buttonMailto.click()
    $form.reset()
}