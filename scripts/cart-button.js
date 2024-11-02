function initializeCartButtons() {
    const cartButtons = document.querySelectorAll('.cart-btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productId = productCard.getAttribute('product-id');

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const product = {
                id: productId,
                name: productCard.querySelector('.product-name').innerText,
                description: productCard.querySelector('.product-description').innerText,
                price: parseFloat(productCard.querySelector('.product-price').innerText.replace('р.', '').trim()),
                image: productCard.querySelector('img').src,
                quantity: 1
            };

            const existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            button.classList.add('added-to-cart');
            const cartIcon = button.querySelector('.cart-icon');
            try {
                cartIcon.src = "icons/cart.png"
            } catch (e) {}
            console.log("Peepeepoopoo");
            showAlert('Товар добавлен в корзину!', 'success');

            setTimeout(() => {
                cartIcon.src = "icons/cart2.png"
                button.classList.remove('added-to-cart');
            }, 500);
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeCartButtons);
