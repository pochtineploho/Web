document.addEventListener('DOMContentLoaded', function() {
    displayFavorites();
});

document.addEventListener('navigate', function() {
    displayFavorites();
})

function displayFavorites() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        productGrid.innerHTML = '<h1 class="empty-cart">Тут пока пусто, но в ваших силах это исправить!</h1>';
        return;
    }

    favorites.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.classList.add('product-card__common');
        card.setAttribute('product-id', product.id);

        card.innerHTML = `
        <a href="product-page.html" class="product-link" onclick="saveProductToLocalStorage(${product.id})">
            <img src="${product.image}" alt="${product.name}">
                <div class="product-footer product-footer__common">
                    <div class="product-info product-info__common">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description product-description__common">${product.description}</p>
                    </div>
                    <p class="product-price product-price__common">${product.price}</p>
                </div>
            </a>
            <div class="card-icons card-icons__common">
                <button class="like-btn">
                    <img src="icons/liked.png" alt="Убрать из избранного" class="like-icon">
                </button>
                <button class="cart-btn">
                    <img src="icons/cart2.png" alt="Добавить в корзину" class="cart-icon">
                </button>
            </div>`;

        productGrid.appendChild(card);
    });

    initializeCartButtons();
    initializeRemoveFromFavorites();
}

function initializeRemoveFromFavorites() {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productCard = button.closest('.product-card');
            const productId = productCard.getAttribute('product-id');

            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            favorites = favorites.filter(item => item.id !== productId);

            localStorage.setItem('favorites', JSON.stringify(favorites));
            displayFavorites();
        });
    });
}

// TODO innerHTML, favourites -> product cart
