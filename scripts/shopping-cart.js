function loadCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    while (cartItemsContainer.firstChild) {
        cartItemsContainer.removeChild(cartItemsContainer.firstChild);
    }

    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        const itemLeft = document.createElement('div');
        itemLeft.classList.add('cart-item-left');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.classList.add('cart-item-image');

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('cart-item-details');

        const itemName = document.createElement('h2');
        itemName.classList.add('cart-item-name');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('cart-item-description');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('cart-item-price');
        itemPrice.textContent = `${item.price} ₽`;

        const itemQuantity = document.createElement('p');
        itemQuantity.classList.add('cart-item-quantity');
        itemQuantity.textContent = `Количество: ${item.quantity}`;

        itemDetails.append(itemName, itemDescription, itemPrice, itemQuantity);
        itemLeft.append(itemImage, itemDetails);

        // Кнопки управления товаром
        const itemButtons = document.createElement('div');
        itemButtons.classList.add('cart-item-buttons');

        const addButton = document.createElement('button');
        addButton.classList.add('add-btn');
        addButton.dataset.id = item.id;
        addButton.textContent = 'Добавить';

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.dataset.id = item.id;
        removeButton.textContent = 'Удалить';

        const removeAllButton = document.createElement('button');
        removeAllButton.classList.add('remove-all-btn');
        removeAllButton.dataset.id = item.id;
        removeAllButton.textContent = 'Удалить все';

        itemButtons.append(addButton, removeButton, removeAllButton);
        itemElement.append(itemLeft, itemButtons);
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
