function setMainImage(imageElement) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageElement.src;
}

function closeModal() {
    document.getElementById('image-modal').style.display = "none";
}

document.getElementById('main-image').addEventListener('click', function () {
    const modal = document.getElementById('image-modal');
    const fullImage = document.getElementById('full-image');
    fullImage.src = this.src;
    modal.style.display = 'block';
});


window.onclick = function (event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
