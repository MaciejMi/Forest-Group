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
