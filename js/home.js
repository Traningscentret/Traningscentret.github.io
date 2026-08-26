
//Carousel functionality
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const dots = Array.from(document.querySelectorAll('.carousel-dot'));
const previousButton = document.querySelector('.carousel-button--previous');
const nextButton = document.querySelector('.carousel-button--next');
let activeIndex = 0; //current one active

function showSlide(index) {
	activeIndex = (index + slides.length) % slides.length;

	slides.forEach((slide, slideIndex) => {
		slide.classList.toggle('is-active', slideIndex === activeIndex);
	});

	dots.forEach((dot, dotIndex) => {
		const isActive = dotIndex === activeIndex;
		dot.classList.toggle('is-active', isActive);
		dot.toggleAttribute('aria-current', isActive);
	});
}

previousButton.addEventListener('click', () => showSlide(activeIndex - 1));
nextButton.addEventListener('click', () => showSlide(activeIndex + 1));
dots.forEach((dot, dotIndex) => {
	dot.addEventListener('click', () => showSlide(dotIndex));
});
