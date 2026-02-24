// Form Validation Script for the Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('demoForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            // Clear previous errors and feedback
            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('formFeedback').textContent = '';

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();

            let isValid = true;

            // Validate Name
            if (name === '') {
                document.getElementById('nameError').textContent = 'Name is required.';
                isValid = false;
            } else if (name.length < 2) {
                document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
                isValid = false;
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
            if (email === '') {
                document.getElementById('emailError').textContent = 'Email is required.';
                isValid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Show success message if valid
            if (isValid) {
                document.getElementById('formFeedback').textContent = 'Form is valid! (Demo - no data sent)';
                document.getElementById('formFeedback').style.color = 'green';
                // Optionally, you could clear the form fields
                // form.reset();
            } else {
                document.getElementById('formFeedback').textContent = 'Please fix the errors above.';
                document.getElementById('formFeedback').style.color = 'red';
            }
        });
    }// ===== DARK MODE TOGGLE =====
// Create dark mode button
const darkModeBtn = document.createElement('button');
darkModeBtn.className = 'dark-mode-toggle';
darkModeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
document.body.appendChild(darkModeBtn);

// Check for saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}

// Toggle dark mode
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
    // ===== TYPING EFFECT =====
const words = ['Web Development', 'Programming', 'AI Technology', 'Data Analysis', 'Problem Solving'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById('typed-text');

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start typing effect
if (document.getElementById('typed-text')) {
    setTimeout(typeEffect, 1000);
}
// ===== CERTIFICATIONS CAROUSEL =====
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (track && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        track.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        track.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
}
// ===== VISITOR COUNTER =====
function updateVisitorCounter() {
    let count = localStorage.getItem('visitorCount');
    
    if (count) {
        count = parseInt(count) + 1;
    } else {
        count = 1;
    }
    
    localStorage.setItem('visitorCount', count);
    document.getElementById('visitor-count').textContent = count;
}

// Update counter on page load
updateVisitorCounter();
// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

// Show/hide button based on scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Scroll to top on click
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
});
});