document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('timeDisplay');
    setInterval(() => {
        const now = new Date();
        timeDisplay.textContent = now.toLocaleTimeString() + ' - ' + now.toLocaleDateString();
    }, 1000);
});

