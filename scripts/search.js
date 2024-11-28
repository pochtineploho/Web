const categoryFilters = document.querySelectorAll('.category-filters input[type="checkbox"]');
categoryFilters.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

document.getElementById('reset-filters-btn').addEventListener('click', function() {
    categoryFilters.forEach(cb => cb.checked = false);
    document.getElementById('search-bar').value = '';
    filterProducts();
});

document.getElementById('search-bar').addEventListener('input', filterProducts);

function filterProducts() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase().trim();
    const selectedCategories = Array.from(document.querySelectorAll('.category-filters input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesGender = product.gender === localStorage.getItem("selectedGender");
        const matchesSearch = product.name.toLowerCase().includes(searchValue) ||
            product.description.toLowerCase().includes(searchValue);

        return matchesCategory && matchesGender && matchesSearch;
    });

    displayProducts(filteredProducts);
    initializeLikeButtons();
}

document.addEventListener(productsLoadedEvent.type, function() {
    filterProducts();
});
