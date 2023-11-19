const slides = [
    '<img src="img/home/katrine.png" alt="client"> <h3>Katarine Peterson</h3> <p> “The follower arrangements from Sami"s Flowers are always chic,classy, and fresh.”</p>',
    '<img src="img/home/liza.png" alt="client"><h3>Lisa+Matt Walsh</h3><p> “They"ve helped to turn our wedding into a fairytale! Lisa likes how they"ve listened to her vision, and I believe they"ve actually exceeded our expectations.”</p>',
    '<img src="img/home/katarina.png" alt="client"><h3>Karin Erwing</h3><p> “I am an event planner, and I always turn to Sami"s Flowers. They have not failed me even once, and they always pick the perfect flowers for the occasion!”</p>',
];

let currentSlide = 0;

const slideContainer = document.querySelector('.testimonials__list')
function renderSlide() {
    slideContainer.innerHTML = slides[currentSlide];
    const imgElement = slideContainer.querySelector('img');
    const firstParagraph = slideContainer.querySelector('h3');
    const secondParagraph = slideContainer.querySelector('p');

    if (imgElement) {
        imgElement.style.width = '30%';
    }

    if (firstParagraph) {
        firstParagraph.style.fontSize = '40px';
        firstParagraph.style.paddingBottom = '20px';
    }

    if (secondParagraph) {
        secondParagraph.style.fontSize = '30px';
        secondParagraph.style.paddingBottom = '50px';
    }

    renderIndicators();
}
renderIndicators

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

const nextButton = document.querySelector('.testimonials__button-testimonials__button-next');
nextButton.addEventListener('click', nextSlide);

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
}
const prevButton = document.querySelector('.testimonials__button-testimonials__button-prev');
prevButton.addEventListener('click', prevSlide);

renderSlide();
window.addEventListener('resize', renderSlide);

function renderIndicators() {
    const indicatorsContainer = document.querySelector('.indicator-nav');
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        indicatorsContainer.innerHTML += `<div class="indicator-nav__button ${i === currentSlide ? 'indicator-nav__button--active' : ''}"></div>`;
    }
    const indicators = document.querySelectorAll('.indicator-nav__button');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            renderSlide();
            renderIndicators(slides, currentSlide);
        });
    });
}
renderIndicators();