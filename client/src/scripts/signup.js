const signupForm = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const userTypeSelect = document.getElementById('userType');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userData = {
        email: emailInput.value,
        password: passwordInput.value,
        userType: userTypeSelect.value
    };

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            window.location.href = '/login.html';
        } else {
            alert('Signup failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
