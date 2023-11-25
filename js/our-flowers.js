const products = [
    {
        id: 1,
        title: "Fantasy",
        category: "Greetings",
        discount: 119.00,
        price: 100.00,
        img: "./img/new-in-shop/fantasy.png",
        badge: "",
        description: `This wonderful combination of different flowers, textures, and colors can be a great bouquet for any occasion.`,
        composition: "chrysanthemums, dandelions, forget-me-nots, alstroemerias",
        status: "inStock",
        code: 22
    },
    {
        id: 2,
        title: "Daphne",
        category: "Greetings",
        discount: 65.00,
        price: 59.00,
        img: "./img/new-in-shop/daphne.png",
        badge: "",
        description: `This exquisite bouquet will not fade for a long time and will delight the eye with its presence.`,
        composition: "roses, lilies, celosias, flowering kale",
        status: "inStock",
        code: 21
    },
    {
        id: 3,
        title: "Grace",
        category: "Greetings",
        discount: 89.00,
        price: 80.00,
        img: "./img/new-in-shop/grace.png",
        badge: "",
        description: `This beautiful bouquet will convey a warm hello from you to your loved ones and fill their home with an elegant fragrance.`,
        composition: "roses, dahlias, daisies, ferns",
        status: "inStock",
        code: 8
    },
    {
        
        id: 4,
        title: "Autumn",
        category: "Greetings",
        discount: 65.00,
        price: 59.00,
        img: "./img/new-in-shop/autumn.png",
        badge: "",
        description: `A beautiful bouquet in autumn colors will remind the recipient of you and say hello from you to your friends, family members, colleagues, or acquaintances.`,
        composition: "giant lily, chrysanthemums, dahlias, pansies",
        status: "inStock",
        code: 20
    },
    {
        id: 5,
        title: "Innocence",
        category: "Thank You",
        discount: 140.00,
        price: 134.00,
        img: "./img/new-in-shop/innocence.png",
        badge: "",
        description: `This gorgeous all-white bouquet is a stunning tribute to the purity of love. Lilies represent innocence and humility, while daisies symbolize cheerfulness and optimism. The roses complete the bouquet with a hint of timeless romance.`,
        composition: "lilies, field daisies, roses, fern",
        status: "inStock",
        code: 27
    },
    {
        id: 6,
        title: "Sparkle",
        category: "Thank You",
        discount: 90.00,
        price: 80.00,
        img: "./img/new-in-shop/sparkle.png",
        badge: "",
        description: `This stunning bouquet is a vibrant tapestry of color and texture. The lush array of blooms includes chrysanthemums in shades of yellow and rust, delicate lilies, and cheerful alstroemerias in pink and peach. Perfect for any special occasion, this gorgeous bouquet is sure to make someone smile.`,
        composition: "chrysanthemums, alstroemerias, lilies, fern",
        status: "inStock",
        code: 28
    },
    {
        id: 7,
        title: "Josephine",
        category: "Thank You",
        discount: 110.00,
        price: 99.00,
        img: "./img/new-in-shop/josephine.png",
        badge: "",
        description: `This elegant and luxurious bouquet consists of several types of flowers and is perfect for expressing gratitude.`,
        composition: "roses, dahlias, daisies, ferns",
        status: "inStock",
        code: 19
    },
    {
        id: 8,
        title: "Amphora",
        category: "Thank You",
        discount: 80.00,
        price: 72.00,
        img: "./img/new-in-shop/amphora.png",
        badge: "",
        description: `This beautiful bouquet is the perfect way to show your love and appreciation. It creates a brilliant blend of the traditional and the modern.`,
        composition: "red and yellow roses, chrysanthemums",
        status: "inStock",
        code: 25
    },
    {
        id: 9,
        title: "Splash",
        category: "Have a Good Day!",
        discount: 65.00,
        price: 59.00,
        img: "./img/new-in-shop/splash.png",
        badge: "",
        description: `A bright splash of color and positive emotions — that's what this bouquet is, created by our florists specifically for the wishes of a good day.`,
        composition: "bellflowers, lilies, chrysanthemums",
        status: "inStock",
        code: 23
    },
    {
        id: 10,
        title: "Poetry",
        category: "Have a Good Day!",
        discount: 65.00,
        price: 59.00,
        img: "./img/new-in-shop/poetry.png",
        badge: "",
        description: `Delicate and light bouquet for everyone who loves pastel color combinations and elegant fragrances.`,
        composition: "roses, dahlias, daisies, ferns",
        status: "inStock",
        code: 24
    },
    {
        id: 11,
        title: "Ginebra",
        category: "Have a Good Day!",
        discount: 110.00,
        price: 98.00,
        img: "./img/new-in-shop/ginebra.png",
        badge: "",
        description: `This stunning bouquet is a vibrant tapestry of color and texture. The lush array of blooms includes chrysanthemums in shades of yellow and rust, delicate lilies, and cheerful alstroemerias in pink and peach. Perfect for any special occasion, this gorgeous bouquet is sure to make someone smile.A combination of long-stemmed white lilies and cheerful daisies in shades of blue come together in an explosion of color and fragrance, perfect for any occasion!`,
        composition: "lilies, daisies, roses, alstroemerias",
        status: "inStock",
        code: 26
    },
    {
        id: 12,
        title: "Ellie",
        category: "Have a Good Day!",
        discount: 65.00,
        price: 59.00,
        img: "./img/new-in-shop/ellie.png",
        badge: "",
        description: `Fresh and delicate, like a summer day in a flowery meadow, this bouquet is perfect for any occasion.`,
        composition: "corn poppies, daisies, cornflowers, blanket flowers",
        status: "inStock",
        code: 18
    },
];

const tabProducts = document.querySelector(".tab-products");
const filterBtns = document.querySelectorAll('.filter-btn');

// load products
window.addEventListener("DOMContentLoaded", function () {
    displayProductItems(products);
});

// filter products
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const productsCategory = products.filter(function (productItem) {
            return productItem.category === category;
        });
        console.log(productsCategory);
        displayProductItems(productsCategory); // Відобразити фільтровані товари
    });
});

function displayProductItems(productItems) {
    let displayProducts = productItems.map(function (item) {
        return `<article class="tab-content-container_item">
        <div class="item_img">
            <img src="${item.img}" alt="${item.title}" class="item_logo">
        </div>
        <div class="tab-item__info-interaction">
        <a href="#"><p class="tab-item__title">${item.title}</p></a>
            <div class="tab-item__price-section">
                <p class="price-section__old-price tab-discount">$${item.discount} USD</p>
                <p class="price-section__actual-price">$${item.price} USD</p>
            </div>
            <div class="samis-button_link-container">
                <a href="#" class="samis-button">ADD TO CART</a>
            </div>
        </div>
    </article>`;
    });
    displayProducts = displayProducts.join("");
    tabProducts.innerHTML = displayProducts;
}
