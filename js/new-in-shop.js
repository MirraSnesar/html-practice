import { products } from './products-catalogue.js'

const slides = []
let currentSlide = 0
const nextButton = document.querySelector('.new-in-shop__arrowL')
nextButton.addEventListener('click', nextSlide)
const prevButton = document.querySelector('.new-in-shop__arrowR')
prevButton.addEventListener('click', prevSlide)

renderProduct(products)

function renderProduct(products) {
    const productsContainer = document.querySelector('.new-in-shop__products');
    productsContainer.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
            const content = `
            <div class="new-in-shop__product product">
                <a class="id-${products[i].code}" href="store-product?id=${products[i].code}"><img src="${products[i].images[0]}" alt="${products[i].name}"></img></a>
                <a href="store-product?id=${products[i].code}" class="product__name" id=${products[i].code}">${products[i].name}</a>
                <p class="product__price">${products[i].price.toFixed(2)}${products[i].currency}</p>
                <div class="samis-button_link-container">
                    <a href="store-product?id=${products[i].code}#cart-badge" id=${products[i].code}  class="add-btn samis-button">ADD TO CART</a>
                </div>
            </div>`
            slides.push(content)
    }
    renderSlide()
}

function renderSlide() {
    const productsContainer = document.querySelector('.new-in-shop__products');
    productsContainer.innerHTML = '';

    if (window.matchMedia('(min-width: 990px)').matches) {
        for (let i = currentSlide; i < currentSlide + 4; i++) {
            const slideIndex = i >= slides.length ? i - slides.length : i;
            productsContainer.innerHTML += slides[slideIndex];
        }
    } else if (window.matchMedia('(min-width: 767px)').matches) {
        for (let i = currentSlide; i < currentSlide + 2; i++) {
            const slideIndex = i >= slides.length ? i - slides.length : i;
            productsContainer.innerHTML += slides[slideIndex];
        }
    } else {
        productsContainer.innerHTML = slides[currentSlide];
    }
    renderIndicators();
}

function prevSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1
    renderSlide()
}

function nextSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1
    renderSlide()
}

window.addEventListener('resize', renderProduct)

function renderIndicators() {
    const indicatorsContainer = document.querySelector('.new-in-shop__carousel-indicators');
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        indicatorsContainer.innerHTML += `<button class="new-in-shop__carousel-indicator ${i === currentSlide ? 'new-in-shop__carousel-indicator--active' : ''}"></button>`;
    }
    const indicators = document.querySelectorAll('.new-in-shop__carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            renderSlide();
            renderIndicators(slides, currentSlide);
        });
        indicator.addEventListener('mouseover', () => {
            indicator.classList.add('new-in-shop__button--hover');
        });

        indicator.addEventListener('mouseout', () => {
            indicator.classList.remove('new-in-shop__button--hover');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    renderIndicators();
});