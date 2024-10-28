function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.classList.add('product-card__common');
    card.setAttribute('data-gender', product.gender);
    card.setAttribute('product-id', product.id);
    card.setAttribute('additional-images', product.additional_images);

    card.innerHTML = `
        <a href="product-page.html" class="product-link" onclick="saveProductToLocalStorage(${product.id})">
            <img src="${product.image}" alt="${product.name}">
                <div class="product-footer product-footer__common">
                    <div class="product-info product-info__common">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description product-description__common">${product.description}</p>
                    </div>
                    <p class="product-price product-price__common">${product.price} р.</p>
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

    return card;
}

function saveProductToLocalStorage(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
    }
}

function displayProducts(filteredProducts) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });

    initializeCartButtons()
}