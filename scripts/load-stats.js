(function () {
    const loadStatsElement = document.getElementById("load-stats");

    window.addEventListener("load", () => {
        const fullLoadTime = performance.now();
        loadStatsElement.textContent += `Page fully loaded in ${fullLoadTime.toFixed(2)} ms.`;
    });
})();