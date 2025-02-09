function initializeLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        const productCard = button.closest('.product-card');
        const productId = productCard.getAttribute('product-id');
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const favoriteIcon = button.querySelector('.like-icon');

        if (favorites.some(item => item.id === productId)) {
            favoriteIcon.src = 'icons/liked.png';
            favoriteIcon.alt = 'Убрать из избранного';
        } else {
            favoriteIcon.src = 'icons/favorites2.png';
            favoriteIcon.alt = 'Добавить в избранное';
        }

        button.addEventListener('click', () => {
            favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const product = {
                name: productCard.querySelector('.product-name').innerText,
                description: productCard.querySelector('.product-description').innerText,
                price: productCard.querySelector('.product-price').innerText,
                image: productCard.querySelector('img').src,
                gender: productCard.getAttribute('data-gender'),
                id: productCard.getAttribute('product-id')
            };

            const isFavorite = favorites.some(item => item.id === product.id);

            if (isFavorite) {
                favorites = favorites.filter(item => item.id !== product.id);
                favoriteIcon.src = 'icons/favorites2.png';
                favoriteIcon.alt = 'Добавить в избранное';
            } else {
                favorites.push(product);
                favoriteIcon.src = 'icons/liked.png';
                favoriteIcon.alt = 'Убрать из избранного';
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
}

document.addEventListener('productsLoaded', function() {
    initializeLikeButtons();
});

window.initializeLikeButtons = initializeLikeButtons;
