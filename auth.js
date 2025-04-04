// Tab switching between login and signup
document.querySelectorAll('.auth-tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and forms
        document.querySelectorAll('.auth-tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.auth-form').forEach(form => {
            form.classList.remove('active');
        });

        // Add active class to clicked button and corresponding form
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(`${tabId}-form`).classList.add('active');
    });
});

// Login form submission - NOW REDIRECTS TO HOME PAGE
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Login attempt with:', { username, password });
    
    // Redirect to home page
    window.location.href = 'site.html';
});

// Signup form submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;
    
    // Validation
    if (!email || !username || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Signup attempt with:', { email, username, password });
    
    // Simulate successful signup
    simulateSignup();
});

// Social login buttons
document.querySelectorAll('.social-btn').forEach(button => {
    button.addEventListener('click', function() {
        const provider = this.classList.contains('google') ? 'Google' : 'GitHub';
        alert(`In a real app, this would redirect to ${provider} authentication`);
    });
});

// Forgot password link
document.querySelector('.forgot-password')?.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password reset functionality would go here!');
});

// Simulate successful signup (kept for signup flow)
function simulateSignup() {
    const authCard = document.querySelector('.auth-card');
    authCard.innerHTML = `
        <div class="auth-success">
            <div class="auth-success-icon">✓</div>
            <h2>Account Created</h2>
            <p>Welcome to Nexus! Redirecting you to the homepage...</p>
        </div>
    `;
    
    // Redirect after signup
    setTimeout(() => {
        window.location.href = 'site.html';
    }, 2000);
}