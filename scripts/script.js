/**
 * Innovators' Coding Club - Main Script
 * 
 * This script contains:
 * 1. Theme Toggle (Dark/Light Mode)
 * 2. Mobile Navigation Menu Toggle
 * 3. Scroll Animations (Header visibility, fade-in elements)
 * 4. Digital Rain Effect in Hero Section
 * 
 * Note: Back to Top Button functionality has been moved to backToTop.js
 */

// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initThemeToggle();
    initMobileNav();
    initScrollAnimations();
    // Back to top button functionality moved to separate file
    initDigitalRain();
    
    // Add fallback for browsers that don't support JS
    document.body.classList.remove('no-js');
});

/**
 * Theme Toggle Functionality
 * Toggles between dark and light mode
 * Saves preference to localStorage
 */
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else if (savedTheme === 'dark' || prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        if (newTheme === 'light') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

/**
 * Mobile Navigation
 * Handles hamburger menu toggle on mobile devices
 */
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * Scroll Animations
 * 1. Header visibility based on scroll direction
 * 2. Fade-in animations for elements
 */
function initScrollAnimations() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    // Intersection Observer for fade-in elements
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add visible class when element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Stop observing after animation
                if (entry.target.tagName === 'IMG') {
                    fadeObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all gallery images
    document.querySelectorAll('.gallery-item img').forEach(img => {
        fadeObserver.observe(img);
    });
    
    // Observe elements with fade-in-element class
    document.querySelectorAll('.fade-in-element').forEach(el => {
        fadeObserver.observe(el);
    });
    
    // Handle scroll events for header visibility
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const currentScrollY = window.scrollY;
                
                // Always keep header visible (sticky)
                header.classList.remove('scrolled');
                header.classList.add('visible');
                
                lastScrollY = currentScrollY;
                ticking = false;
            });
            
            ticking = true;
        }
    });
}


/**
 * Digital Rain Effect
 * Creates a Matrix-style digital rain effect in the hero section
 */
function initDigitalRain() {
    const digitalRain = document.querySelector('.digital-rain-effect');
    
    // Only proceed if digitalRain element exists
    if (!digitalRain) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Append canvas to digital rain element
    digitalRain.appendChild(canvas);
    
    // Set canvas size
    function setCanvasSize() {
        canvas.width = digitalRain.offsetWidth;
        canvas.height = digitalRain.offsetHeight;
    }
    
    // Initial size
    setCanvasSize();
    
    // Update size on window resize
    window.addEventListener('resize', setCanvasSize);
    
    // Characters for the matrix effect
    const chars = '01'.split('');
    
    // Rain drop properties
    const drops = [];
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }
    
    // Draw the rain
    function drawRain() {
        // Semi-transparent black to create fade effect
        ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set text properties
        ctx.fillStyle = '#00D1FF';
        ctx.font = `${fontSize}px monospace`;
        
        // Draw each character
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const text = chars[Math.floor(Math.random() * chars.length)];
            
            // Draw with varying opacity for depth effect
            ctx.globalAlpha = Math.random() * 0.2 + 0.1;
            
            // Draw the character
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Move drop down or reset to top
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Increment drop position
            drops[i]++;
        }
    }
    
    // Animation loop
    function animateRain() {
        drawRain();
        setTimeout(animateRain, 100);
    }
    
    // Start animation
    animateRain();
}
