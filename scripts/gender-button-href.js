document.addEventListener('DOMContentLoaded', function () {
    const femaleBtn = document.getElementById('female-btn');
    const maleBtn = document.getElementById('male-btn');

    const savedGender = localStorage.getItem('selectedGender') || 'female';

    if (savedGender === 'female') {
        femaleBtn.classList.add('active');
        maleBtn.classList.remove('active');
    } else {
        maleBtn.classList.add('active');
        femaleBtn.classList.remove('active');
    }

    femaleBtn.addEventListener('click', function () {
        localStorage.setItem('selectedGender', 'female');
        window.location.href = 'search.html';
    });

    maleBtn.addEventListener('click', function () {
        localStorage.setItem('selectedGender', 'male');
        window.location.href = 'search.html';
    });
});