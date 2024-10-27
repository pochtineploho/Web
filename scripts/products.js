// Универсальные товары
const products = [
    {
        name: "Пивозавр",
        description: "Футболка",
        price: "7000 р.",
        image: "images/products/beer.jpg",
        gender: "male",
        category: "t-shirts"
    },
    {
        name: "Модная футболка",
        description: "Футболка",
        price: "5000 р.",
        image: "images/products/shirt.jpg",
        gender: "female",
        category: "t-shirts"
    },
    {
        name: "Худи с логотипом",
        description: "Худи",
        price: "6000 р.",
        image: "images/products/hoodie.jpg",
        gender: "female",
        category: "hoodies"
    }
    // Дополнительные товары...
];

// Переменная для отслеживания выбранного пола
let currentGender = 'female';  // По умолчанию - женское

// Функция для создания карточки товара
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.setAttribute('data-gender', product.gender);

    card.innerHTML = `
        <a href="product-page.html" class="product-link">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-footer">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                </div>
                <p class="product-price">${product.price}</p>
            </div>
        </a>
        <div class="card-icons">
            <button class="like-btn">
                <img src="icons/favorites2.png" alt="Избранное" class="like-icon">
            </button>
            <button class="cart-btn">
                <img src="icons/cart2.png" alt="Добавить в корзину">
            </button>
        </div>`;

    return card;
}

// Функция отображения товаров
function displayProducts(filteredProducts) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });
}

// Фильтрация по полу и категориям
function filterProductsByCategory(selectedCategories) {
    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesGender = product.gender === currentGender;
        return matchesCategory && matchesGender;
    });
    displayProducts(filteredProducts);
}

// Обработчики для фильтров категорий
const categoryFilters = document.querySelectorAll('.category-filters input[type="checkbox"]');
categoryFilters.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const selectedCategories = Array.from(categoryFilters)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        filterProductsByCategory(selectedCategories);
    });
});

document.getElementById('reset-filters-btn').addEventListener('click', function() {
    categoryFilters.forEach(cb => cb.checked = false);
    filterProductsByCategory([]);
});

document.getElementById('female-btn').addEventListener('click', function() {
    document.getElementById('female-btn').classList.add('active');
    document.getElementById('male-btn').classList.remove('active');
    currentGender = 'female';
    filterProductsByCategory([]);
});

document.getElementById('male-btn').addEventListener('click', function() {
    document.getElementById('male-btn').classList.add('active');
    document.getElementById('female-btn').classList.remove('active');
    currentGender = 'male';
    filterProductsByCategory([]);
});

document.addEventListener('DOMContentLoaded', function() {
    filterProductsByCategory([]);
});
