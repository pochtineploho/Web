document.addEventListener('DOMContentLoaded', function() {
    const productData = JSON.parse(localStorage.getItem('selectedProduct'));

    if (productData) {
        document.querySelector('.product-page-name').textContent = productData.name;
        document.querySelector('.product-page-category').textContent = productData.description;
        document.querySelector('.product-page-description').textContent = "Описание продукта";
        document.querySelector('.product-page-price').textContent = productData.price;
        document.getElementById('main-image').src = productData.image;

        const additionalImagesContainer = document.querySelector('.product-page-additional-images');
        additionalImagesContainer.innerHTML = '';

        const mainImageThumbnail = document.createElement('img');
        mainImageThumbnail.src = productData.image;
        mainImageThumbnail.alt = `${productData.name} миниатюра`;
        mainImageThumbnail.onclick = () => setMainImage(mainImageThumbnail);
        additionalImagesContainer.appendChild(mainImageThumbnail);

        productData.additional_images.forEach(imageSrc => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imageSrc.toString();
            thumbnail.alt = `${productData.name} миниатюра`;
            thumbnail.onclick = () => setMainImage(thumbnail);
            additionalImagesContainer.appendChild(thumbnail);
        });
    } else {
        window.location.href = "main-page.html";
    }
});

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
