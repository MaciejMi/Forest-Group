const mobileNav = document.querySelector('.nav__items--mobile');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
	mobileNav.classList.toggle('hidden');
	hamburger.classList.toggle('is-active');
});
