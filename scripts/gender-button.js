document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('female-btn').classList.add('active');
    filterProductsByGender('female');
});

document.getElementById('female-btn').addEventListener('click', function () {
    document.getElementById('female-btn').classList.add('active');
    document.getElementById('male-btn').classList.remove('active');
    filterProductsByGender('female');
});

document.getElementById('male-btn').addEventListener('click', function () {
    document.getElementById('male-btn').classList.add('active');
    document.getElementById('female-btn').classList.remove('active');
    filterProductsByGender('male');
});

function filterProductsByGender(gender) {
    const filteredProducts = products.filter(product => product.gender === gender);
    displayProducts(filteredProducts);
    initializeLikeButtons();
}
