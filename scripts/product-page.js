document.addEventListener('DOMContentLoaded', function() {
    const productData = JSON.parse(localStorage.getItem('selectedProduct'));
    console.log(productData);
    if (productData) {
        const productCard = document.querySelector('.product-card');
        productCard.setAttribute('product-id', productData.id);
        document.querySelector('.product-name__page').textContent = productData.name;
        document.querySelector('.product-category__page').textContent = productData.category;
        document.querySelector('.product-description__page').textContent = productData.description;
        document.querySelector('.product-price__page').textContent = productData.price + " р.";
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