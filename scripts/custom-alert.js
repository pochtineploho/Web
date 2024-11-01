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
