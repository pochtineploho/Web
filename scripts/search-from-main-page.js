function setCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    if (category) {
        const checkbox = document.querySelector(`.category-filters input[type="checkbox"][value="${category}"]`);
        if (checkbox) {
            checkbox.checked = true;
        }
    }
}

document.addEventListener(productsLoadedEvent.type, function() {
    setCategoryFromURL();
    filterProducts();
});
