/**
 * Back to Top Button
 * Smooth scroll to top functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    initBackToTop();
});

/**
 * Initialize Back to Top Button
 * Shows/hides button based on scroll position
 * Scrolls smoothly to top when clicked
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top-btn');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
