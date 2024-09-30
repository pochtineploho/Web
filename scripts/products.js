document.addEventListener('DOMContentLoaded', function() {
    // Массив с данными о товарах
    const products = [
        {
            name: "Билли",
            description: "Негр",
            price: "7000 р.",
            image: "images/products/negr.jpg"
        },
        {
            name: "Томми",
            description: "Негр",
            price: "7000 р.",
            image: "images/products/negr.jpg"
        },
        {
            name: "Майкл",
            description: "Негр",
            price: "7000 р.",
            image: "images/products/negr.jpg"
        },        {
            name: "Карл",
            description: "Негр",
            price: "7000 р.",
            image: "images/products/negr.jpg"
        },        {
            name: "Убвемубвем О Сас",
            description: "Негр",
            price: "7000 р.",
            image: "images/products/negr.jpg"
        }
    ];

    const productGrid = document.getElementById('product-grid');

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;
        return card;
    }

    // Генерация карточек для каждого товара
    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
});
