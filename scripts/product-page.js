function setMainImage(imgElement) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imgElement.src;
}

document.getElementById('main-image').addEventListener('click', function () {
    const modal = document.getElementById('image-modal');
    const fullImage = document.getElementById('full-image');
    fullImage.src = this.src;
    modal.style.display = 'block';
});

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
