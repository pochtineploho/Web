document.getElementById('submitAuth').addEventListener('click', () => {
    const login = document.getElementById('loginInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();

    if (login === 'pochtineploho' && password === '1234') {
        toastr.success('Успешная авторизация', 'Добро пожаловать!');
        const authModal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
        authModal.hide();
    } else {
        toastr.error('Неверный логин или пароль', 'Ошибка авторизации');
    }

    toastr.info('Пока что это ничего не даёт', 'Вход')
});


document.getElementById('registerButton').addEventListener('click', () => {
    toastr.info('Функция регистрации пока недоступна.', 'Регистрация');
});
