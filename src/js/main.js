const mobileNav = document.querySelector('.nav__items--mobile');
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelectorAll('.nav__items--mobile .nav__item');
const navItemsDesktop = document.querySelectorAll('.nav__items--desktop .nav__item');
const footerYear = document.querySelector('.footer__year');

const allSectionsScrollspy = document.querySelectorAll('.scrollspy');

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

// Przepraszam, że ten scrollspy taki na ten moment mało "reużywalny", ale nie miałem zbytnio pomysłu na zaprojektowanie swojego, w przyszłości tutaj wrócę i zrobie uniwersalny scrollspy

const removeActives = () => {
	navItemsDesktop[0].classList.remove('active');
	navItemsDesktop[1].classList.remove('active');
	navItemsDesktop[2].classList.remove('active');
};

document.addEventListener('scroll', () => {
	const currentSection = window.scrollY;
	if (currentSection < allSectionsScrollspy[0].offsetTop + 300) {
		removeActives();
		navItemsDesktop[0].classList.add('active');
	} else if (currentSection < allSectionsScrollspy[1].offsetTop + 300) {
		removeActives();
		navItemsDesktop[1].classList.add('active');
	} else if (currentSection < allSectionsScrollspy[2].offsetTop + 300) {
		removeActives();
		navItemsDesktop[2].classList.add('active');
	}
});
