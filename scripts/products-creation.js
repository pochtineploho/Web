function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card', 'product-card__common');
    card.setAttribute('data-gender', product.gender);
    card.setAttribute('product-id', product.id);
    card.setAttribute('additional-images', product.additional_images);

    const productLink = document.createElement('a');
    productLink.href = "product-page.html";
    productLink.classList.add('product-link');
    productLink.addEventListener('click', () => saveProductToLocalStorage(product.id));

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productLink.appendChild(productImage);

    const productFooter = document.createElement('div');
    productFooter.classList.add('product-footer', 'product-footer__common');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info', 'product-info__common');

    const productName = document.createElement('h3');
    productName.classList.add('product-name');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description', 'product-description__common');
    productDescription.textContent = product.description;

    productInfo.appendChild(productName);
    productInfo.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price', 'product-price__common');
    productPrice.textContent = `${product.price} р.`;

    productFooter.appendChild(productInfo);
    productFooter.appendChild(productPrice);
    productLink.appendChild(productFooter);
    card.appendChild(productLink);

    const cardIcons = document.createElement('div');
    cardIcons.classList.add('card-icons', 'card-icons__common');

    const likeButton = document.createElement('button');
    likeButton.classList.add('like-btn');

    const likeIcon = document.createElement('img');
    likeIcon.src = "icons/liked.png";
    likeIcon.alt = "Убрать из избранного";
    likeIcon.classList.add('like-icon');
    likeButton.appendChild(likeIcon);

    const cartButton = document.createElement('button');
    cartButton.classList.add('cart-btn');

    const cartIcon = document.createElement('img');
    cartIcon.src = "icons/cart2.png";
    cartIcon.alt = "Добавить в корзину";
    cartIcon.classList.add('cart-icon');
    cartButton.appendChild(cartIcon);

    cardIcons.appendChild(likeButton);
    cardIcons.appendChild(cartButton);
    card.appendChild(cardIcons);

    return card;
}

function saveProductToLocalStorage(productId) {
    const numericProductId = Number(productId);
    const product = products.find(item => item.id === numericProductId);
    if (product) {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
    }
}

function displayProducts(filteredProducts) {
    const productGrid = document.getElementById('product-grid');
    while (productGrid.firstChild) {
        productGrid.removeChild(productGrid.firstChild);
    }

    filteredProducts.forEach(product => {
        productGrid.appendChild(createProductCard(product));
    });

    initializeCartButtons()
}