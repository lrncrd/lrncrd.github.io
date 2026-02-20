// script.js - Handles common UI elements and animations

document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Intersection Observer for scroll animations
    setupScrollAnimations();

    // 2. Highlight current page in navigation
    highlightCurrentNav();

    // 3. Setup Theme Toggle
    setupThemeToggle();
});

function setupThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Check local storage for preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

function highlightCurrentNav() {
    // Get current page filename
    const path = window.location.pathname;
    let page = path.split('/').pop();

    // Default to index.html if empty
    if (!page || page === '') {
        page = 'index.html';
    }

    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
