// like-button.js
function initializeLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        let isFavorite = false; // Состояние "Избранное"
        const favoriteIcon = button.querySelector('.like-icon');

        button.addEventListener('click', () => {
            isFavorite = !isFavorite; // Переключаем состояние

            if (isFavorite) {
                favoriteIcon.src = 'icons/liked.png';
                favoriteIcon.alt = 'Убрать из избранного';
                console.log("Добавлено в избранное");
            } else {
                favoriteIcon.src = 'icons/favorites2.png';
                favoriteIcon.alt = 'Добавить в избранное';
                console.log("Убрано из избранного");
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("like-button.js загружен");
    initializeLikeButtons();
});

window.initializeLikeButtons = initializeLikeButtons;
