// Extra glitch effect on scroll
window.addEventListener('scroll', () => {
    if (Math.random() > 0.95) {
        document.body.style.animation = 'glitch 0.1s';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 100);
    }
});

// Random flicker
setInterval(() => {
    if (Math.random() > 0.97) {
        document.querySelectorAll('.card').forEach(card => {
            card.style.borderColor = Math.random() > 0.5 ? '#f00' : '#0f0';
        });
    }
}, 200);

// Console message
console.log('%c⚠️ SNUGNET SYSTEM INITIALIZED ⚠️', 'color: #0f0; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #0f0;');
console.log('%cWELCOME TO THE MATRIX', 'color: #f00; font-size: 16px;');