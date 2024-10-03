document.addEventListener('DOMContentLoaded', function() {
    // Массив с данными о товарах
    const products = [
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },
        {
            name: "Пивозавр",
            description: "Футболка",
            price: "7000 р.",
            image: "images/products/beer.jpg"
        },

    ];

    const productGrid = document.getElementById('product-grid');

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
        <a href="product-page.html" class="product-link">
        <div class="card-icons">
            <button class="like-btn">
                <img src="icons/favorites2.png" alt="Избранное" class="like-icon">
            </button>
            <button class="cart-btn">
                <img src="icons/cart2.png" alt="Добавить в корзину">
            </button>
        </div>
        <img src="${product.image}" alt="${product.name}">
        
         <div class="product-footer">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
            </div>
            <p class="product-price">${product.price}</p>
        </div>
    </div>
    </a>
        `;
        return card;
    }

    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
});
