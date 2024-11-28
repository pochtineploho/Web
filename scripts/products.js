let products = [];
const productsLoadedEvent = new Event('productsLoaded');

async function fetchAndReplaceProducts() {
    showPreloader();
    const TIMEOUT = 5000;

    try {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=100');
            if (!response.ok) throw new Error(`HTTP ошибка: ${response.status}`);

            const externalProducts = await response.json();

            const genders = ["male", "female"];
            const categories = ["t-shirts", "hoodies", "pants", "shorts", "sweatshirts", "accessories"];
            products = externalProducts.map((item) => ({
                id: item.id,
                name: item.title.substring(0, 20),
                description: item.body.substring(0, 50) + "...",
                price: `${Math.floor(Math.random() * 10000)}`,
                image: "https://via.placeholder.com/150",
                additional_images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
                gender: genders[item.id % genders.length],
                category: categories[item.id % categories.length],
            }));
            console.log("Продукты успешно загружены:", products);
        };

        const timeout = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Превышено время ожидания загрузки данных")), TIMEOUT)
        );

        await Promise.race([fetchData(), timeout]);
    } catch (error) {
        console.error("Ошибка загрузки продуктов:", error);
        showAlert("Упс, что-то пошло не так!", "error");
    } finally {
        hidePreloader();
    }
}

function showPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'flex';
}

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    fetchAndReplaceProducts().then(() => document.dispatchEvent(productsLoadedEvent));
});

