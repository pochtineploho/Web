document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        let isFavorite = false;
        const favoriteIcon = button.querySelector('.like-icon');

        button.addEventListener('click', () => {
            isFavorite = !isFavorite;

            if (isFavorite) {
                favoriteIcon.src = 'icons/liked.png';
                favoriteIcon.alt = 'Убрать из избранного';
            } else {
                favoriteIcon.src = 'icons/favorites.png';
                favoriteIcon.alt = 'Добавить в избранное';
            }
        });
    });
});
