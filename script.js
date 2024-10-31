// Order now button alert
document.querySelector('button').addEventListener('click', () => {
    alert('Order placed successfully!');
});

// Mobile navigation menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});