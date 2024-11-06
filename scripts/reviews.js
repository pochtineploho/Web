document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews-list');
    const reviewForm = document.getElementById('review-form');
    const averageRatingElement = document.getElementById('average-rating-value');

    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        displayReviews(reviews);
        updateAverageRating(reviews);
    }

    function displayReviews(reviews) {
        while (reviewsContainer.firstChild) {
            reviewsContainer.removeChild(reviewsContainer.firstChild);
        }

        reviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('review-card');

            const usernameElement = document.createElement('h3');
            usernameElement.textContent = review.username;
            reviewCard.appendChild(usernameElement);

            const ratingElement = document.createElement('p');
            ratingElement.classList.add('review-rating');
            ratingElement.textContent = `Оценка: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}`;
            reviewCard.appendChild(ratingElement);

            const commentElement = document.createElement('p');
            const commentTitle = document.createElement('strong');
            commentTitle.textContent = 'Комментарий: ';
            commentElement.appendChild(commentTitle);
            commentElement.appendChild(document.createTextNode(review.comment));
            reviewCard.appendChild(commentElement);

            if (review.pros.trim() !== "") {
                const prosElement = document.createElement('p');
                const prosTitle = document.createElement('strong');
                prosTitle.textContent = 'Плюсы: ';
                prosElement.appendChild(prosTitle);
                prosElement.appendChild(document.createTextNode(review.pros));
                reviewCard.appendChild(prosElement);
            }

            if (review.cons.trim() !== "") {
                const consElement = document.createElement('p');
                const consTitle = document.createElement('strong');
                consTitle.textContent = 'Минусы: ';
                consElement.appendChild(consTitle);
                consElement.appendChild(document.createTextNode(review.cons));
                reviewCard.appendChild(consElement);
            }

            reviewsContainer.appendChild(reviewCard);
        });
    }

    function updateAverageRating(reviews) {
        if (reviews.length === 0) {
            averageRatingElement.textContent = '0';
            return;
        }
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        averageRatingElement.textContent = (totalRating / reviews.length).toFixed(1);
    }

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newReview = {
            username: document.getElementById('username').value.trim(),
            rating: parseInt(document.getElementById('rating').value),
            comment: document.getElementById('comment').value.trim(),
            pros: document.getElementById('pros').value.trim(),
            cons: document.getElementById('cons').value.trim(),
        };

        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        reviewForm.reset();
        loadReviews();
    });

    loadReviews();
});
