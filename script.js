const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuLinks.classList.remove('active');
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth' });
    });
});
