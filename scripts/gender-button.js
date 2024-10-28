if (!localStorage.getItem("selectedGender")) {
    localStorage.setItem("selectedGender", "female");
}

document.addEventListener('DOMContentLoaded', function () {
    const savedGender = localStorage.getItem('selectedGender') || 'female';

    if (savedGender === 'female') {
        document.getElementById('female-btn').classList.add('active');
        document.getElementById('male-btn').classList.remove('active');
    } else {
        document.getElementById('male-btn').classList.add('active');
        document.getElementById('female-btn').classList.remove('active');
    }

    filterProductsByGender(savedGender);
});

document.getElementById('female-btn').addEventListener('click', function () {
    document.getElementById('female-btn').classList.add('active');
    document.getElementById('male-btn').classList.remove('active');
    localStorage.setItem('selectedGender', 'female');
    filterProductsByGender('female');
});

document.getElementById('male-btn').addEventListener('click', function () {
    document.getElementById('male-btn').classList.add('active');
    document.getElementById('female-btn').classList.remove('active');
    localStorage.setItem('selectedGender', 'male');
    filterProductsByGender('male');
});

function filterProductsByGender(gender) {
    const filteredProducts = products.filter(product => product.gender === gender);
    displayProducts(filteredProducts);
    initializeLikeButtons();
}
