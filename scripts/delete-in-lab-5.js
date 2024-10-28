document.addEventListener('DOMContentLoaded', () => {
    const footerLinks = document.querySelectorAll('.footer-nav a');

    footerLinks.forEach(link => {
        const linkUrl = link.getAttribute('href');

        if (linkUrl === document.location.pathname.split("/").pop()) {
            link.parentElement.classList.add('active');
        }
    });
});
