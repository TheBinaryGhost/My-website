/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    
    // serviceID - templateID - #form - publicKey//
    emailjs.sendForm('service_16xy9em', 'template_fpspzse', '#contact-form', 'ngr13zM6-y4lHmIw1')
    .then(() => {
        // Show Sent Message
        contactMessage.textContent = 'Your message has been sent successfully'

        // Clear Messages
        setTimeout(() => {
        contactMessage.textContent = ''
        }, 5000)

        //clear inputs
        contactForm.reset()

    }, () => {
        //Show error message
        contactMessage.textContent = 'An error occurred, please try again'
    })
}

contactForm.addEventListener('submit', sendEmail)


document.addEventListener("DOMContentLoaded", function () {
    const scrollUpButton = document.getElementById("scroll-up");

    /*=============== SHOW SCROLL UP BUTTON ===============*/
    const showScrollUp = () => {
        if (window.scrollY >= 350) {
            scrollUpButton.classList.add("show-scroll");
        } else {
            scrollUpButton.classList.remove("show-scroll");
        }
    };
    window.addEventListener("scroll", showScrollUp);

    /*=============== SMOOTH SCROLL TO TOP ===============*/
    scrollUpButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    });

    /*=============== SMOOTH SCROLL FOR NAVIGATION LINKS ===============*/
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });

                // Remove the hash (#) from the URL after scrolling
                history.pushState(null, null, window.location.pathname);
            }
        });
    });
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    reset: true //Animation repeat//
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills_data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__container`, {origin: 'left'})
