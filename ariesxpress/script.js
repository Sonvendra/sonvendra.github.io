// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

// Auto-play slider
if (slides.length > 0) {
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Testimonials slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev-testimonial');
const nextBtn = document.querySelector('.next-testimonial');

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    
    if (index >= testimonials.length) {
        currentTestimonial = 0;
    } else if (index < 0) {
        currentTestimonial = testimonials.length - 1;
    } else {
        currentTestimonial = index;
    }
    
    testimonials[currentTestimonial].classList.add('active');
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        showTestimonial(currentTestimonial - 1);
    });

    nextBtn.addEventListener('click', () => {
        showTestimonial(currentTestimonial + 1);
    });

    // Auto-play testimonials
    setInterval(() => {
        showTestimonial(currentTestimonial + 1);
    }, 5000);
}

// Modal functionality
function openQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('quoteModal');
    if (event.target === modal) {
        closeQuoteModal();
    }
});

// Track form submissions (quote form is handled separately below)
document.querySelectorAll('.track-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your submission! We will contact you soon.');
        form.reset();
    });
});

// Handle quote form submission with PHP
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    const quoteFormMessage = document.getElementById('quote-form-message');
    const quoteSubmitBtn = document.getElementById('quoteSubmitBtn');

    if (quoteForm && quoteFormMessage && quoteSubmitBtn) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Disable submit button
            quoteSubmitBtn.disabled = true;
            quoteSubmitBtn.textContent = 'Sending...';
            quoteFormMessage.style.display = 'none';

            // Get form data
            const formData = new FormData(this);

            // Send form data to PHP script using Fetch API
            fetch('send_email.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                quoteFormMessage.style.display = 'block';
                
                if (data.success) {
                    quoteFormMessage.className = 'success';
                    quoteFormMessage.textContent = data.message;
                    quoteForm.reset();
                    
                    // Close modal after 2 seconds
                    setTimeout(function() {
                        closeQuoteModal();
                    }, 2000);
                } else {
                    quoteFormMessage.className = 'error';
                    quoteFormMessage.textContent = data.message;
                }
                
                quoteSubmitBtn.disabled = false;
                quoteSubmitBtn.textContent = 'Submit';
                
                // Scroll to message
                quoteFormMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            })
            .catch(error => {
                quoteFormMessage.style.display = 'block';
                quoteFormMessage.className = 'error';
                quoteFormMessage.textContent = 'Sorry, there was an error sending your quote request. Please try again or contact us directly at info@ariesxpress.com';
                quoteSubmitBtn.disabled = false;
                quoteSubmitBtn.textContent = 'Submit';
                console.error('Error:', error);
                
                // Scroll to message
                quoteFormMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
        });
    }
});

// Smooth scrolling for anchor links
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

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (navMenu && menuToggle) {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.main-nav');
        const isClickInsideNav = nav && nav.contains(event.target);
        
        if (!isClickInsideNav && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    });
});
