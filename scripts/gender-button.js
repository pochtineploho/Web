document.getElementById('female-btn').addEventListener('click', function() {
    document.getElementById('female-btn').classList.add('active');
    document.getElementById('male-btn').classList.remove('active');
});

document.getElementById('male-btn').addEventListener('click', function() {
    document.getElementById('male-btn').classList.add('active');
    document.getElementById('female-btn').classList.remove('active');
});
