document.addEventListener("DOMContentLoaded", function () {
        const username = sessionStorage.getItem('signup-username');
        const email = sessionStorage.getItem('signup-email');
        const password = sessionStorage.getItem('signup-password');
    
        document.getElementById('userName').innerText = username;
        document.getElementById('email').innerText = email;
        document.getElementById('password').innerText = password;
    
        sessionStorage.removeItem('signup-username');
        sessionStorage.removeItem('signup-email');
        sessionStorage.removeItem('signup-password');
    });
    