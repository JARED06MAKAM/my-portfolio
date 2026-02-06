// Function to run when any page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded: Welcome, Jared Makambi");
    
    // Animate skill bars if on the skills page
    const fills = document.querySelectorAll('.skill-fill');
    fills.forEach(fill => {
        const percentage = fill.getAttribute('data-percentage');
        setTimeout(() => {
            fill.style.width = percentage + '%';
        }, 500);
    });
});

// Contact Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields to connect!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you, " + name + "! Your message has been sent successfully. Jared will get back to you soon.");
    document.getElementById('contactForm').reset();
}