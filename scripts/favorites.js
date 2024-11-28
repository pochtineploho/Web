document.addEventListener(productsLoadedEvent.type, function() {
    displayFavorites();
});

function displayFavorites() {
    const productGrid = document.getElementById('product-grid');
    while (productGrid.firstChild) {
        productGrid.removeChild(productGrid.firstChild);
    }

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        const emptyMessage = document.createElement('h1');
        emptyMessage.classList.add('empty-cart');
        emptyMessage.textContent = 'Тут пока пусто, но в ваших силах это исправить!';
        productGrid.appendChild(emptyMessage);
        return;
    }

    displayProducts(favorites)
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