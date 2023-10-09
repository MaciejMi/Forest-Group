const mobileNav = document.querySelector('.nav__items--mobile');
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelectorAll('.nav__items--mobile .nav__item');
const footerYear = document.querySelector('.footer__year');


hamburger.addEventListener('click', () => {
	mobileNav.classList.toggle('hidden');
	hamburger.classList.toggle('is-active');
});
navItems.forEach(item => {
	item.addEventListener('click', () => {
		mobileNav.classList.add('hidden');
		hamburger.classList.remove('is-active');
	});
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

handleCurrentYear();

