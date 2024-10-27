// Smooth Scroll to Section
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Back to Top Button Functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '⬆️';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    font-size: 20px;
    border: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    cursor: pointer;
    display: none;
    transition: opacity 0.3s;
`;
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
        setTimeout(() => {
            backToTopButton.style.display = 'none';
        }, 300);
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark/Light Mode Toggle
const modeToggle = document.createElement('button');
modeToggle.innerHTML = '🌙';
modeToggle.style.cssText = `
    position: fixed;
    top: 10px;
    right: 20px;
    padding: 10px;
    font-size: 20px;
    border: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
`;
document.body.appendChild(modeToggle);

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    modeToggle.innerHTML = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});

// Apply styles for light mode via CSS-in-JS
const style = document.createElement('style');
style.innerHTML = `
    .light-mode {
        background-color: white;
        color: black;
    }
    .light-mode .navbar {
        background-color: rgba(255, 255, 255, 0.8);
    }
    .light-mode .navbar ul li a {
        color: black;
    }
    .light-mode .navbar ul li a:hover {
        color: gray;
    }
`;
document.head.appendChild(style);

// Navbar Shrink on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '5px 20px';
    } else {
        navbar.style.padding = '10px 20px';
    }
});
