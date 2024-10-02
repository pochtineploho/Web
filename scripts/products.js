document.addEventListener('DOMContentLoaded', function() {
    // Массив с данными о товарах
    const products = [
        {
            name: "Билли",
            description: "Негр",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },

    ];

    const productGrid = document.getElementById('product-grid');

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
        <div class="card-icons">
            <button class="like-btn">
                <img src="icons/favorites.png" alt="Избранное" class="like-icon">
            </button>
            <button class="cart-btn">
                <img src="icons/cart.png" alt="Добавить в корзину">
            </button>
        </div>
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
        `;
        return card;
    }

    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
});
