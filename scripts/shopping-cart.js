function loadCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div class="cart-item-left">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h2 class="cart-item-name">${item.name}</h2>
                    <p class="cart-item-description">${item.description}</p>
                    <p class="cart-item-price">${item.price} ₽</p>
                    <p class="cart-item-quantity">Количество: ${item.quantity}</p>
                </div>
            </div>
            <div class="cart-item-buttons">
                <button class="add-btn" data-id="${item.id}">Добавить</button>
                <button class="remove-btn" data-id="${item.id}">Удалить</button>
                <button class="remove-all-btn" data-id="${item.id}">Удалить все</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = `${totalPrice} ₽`;

    initializeAddButtons();
    initializeRemoveButtons();
    initializeRemoveAllButtons();
}

function initializeAddButtons() {
    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += 1;
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            loadCartItems();
        });
    });
}

function initializeRemoveButtons() {
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex !== -1) {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity -= 1;
                } else {
                    cart.splice(itemIndex, 1);
                }
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            loadCartItems();
        });
    });
}

function initializeRemoveAllButtons() {
    document.querySelectorAll('.remove-all-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(cart));

            loadCartItems();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();

    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            showAlert('Ваша корзина пуста!', 'error');
        } else {
            showAlert('Спасибо за заказ! Мы свяжемся с вами для подтверждения... или нет', 'success');
            localStorage.removeItem('cart');
            loadCartItems();
        }
    });
});

function showAlert(message, type) {
    const alertBox = document.createElement('div');
    alertBox.className = `custom-alert ${type}`;
    alertBox.textContent = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        alertBox.style.opacity = '0';
        setTimeout(() => document.body.removeChild(alertBox), 500);
    }, 3000);
}
