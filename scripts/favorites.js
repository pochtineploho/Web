document.addEventListener('DOMContentLoaded', function() {
    displayFavorites();
});

function displayFavorites() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        productGrid.innerHTML = '<p>В избранном нет товаров.</p>';
        return;
    }

    favorites.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.setAttribute('id', product.id);

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
                    <img src="icons/liked.png" alt="Убрать из избранного" class="like-icon">
                </button>
                <button class="cart-btn">
                    <img src="icons/cart2.png" alt="Добавить в корзину">
                </button>
            </div>`;

        productGrid.appendChild(card);
    });

    initializeRemoveFromFavorites();
}

function initializeRemoveFromFavorites() {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productCard = button.closest('.product-card');
            const productId = productCard.getAttribute('id');

            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            favorites = favorites.filter(item => item.id !== productId);

            localStorage.setItem('favorites', JSON.stringify(favorites));
            displayFavorites();
        });
    });
}
