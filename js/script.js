const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 90)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open')
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open')
};


ScrollReveal({
	distance: '80px',
	duration: 2000,
	delay: 200,
});

ScrollReveal().reveal('.victorscap-text, .email-content, .habilidades-content, .mid-left', { origin: 'left'});
ScrollReveal().reveal('.victorscap-img, .mid-right', { origin: 'right'});
ScrollReveal().reveal('.scroll, .portfolio-btn, .email-content, .valor-content', { origin: 'bottom'});
ScrollReveal().reveal('.mid-text', { origin: 'top'});
ScrollReveal().reveal('.trabalhos-content, .portfolio-content, .email-content, .contato-content', { origin: 'right'});