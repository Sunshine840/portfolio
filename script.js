// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// Intersection Observer for fade-in animations
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1 
    });

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
} else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('visible');
    });
}

// Image upload handler (optional - for future use)
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profileImg');
    
    // Check if image source is empty or invalid
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            // If image fails to load, hide it to show placeholder
            this.style.display = 'none';
        });

        profileImg.addEventListener('load', function() {
            // If image loads successfully, show it
            this.style.display = 'block';
        });
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
