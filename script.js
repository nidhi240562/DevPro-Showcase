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
    }
});