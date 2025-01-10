const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Get form values
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (email === 'admin@gmail.com' && password === '11111111') {
        // Store login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to the Admin Page
        window.location.href = './admin/dashboard.html';  // Change this to your actual admin page URL
      }
      else if(email === 'user@gmail.com' && password === '22222222'){
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = './user/home.html';
      }
      else {
        alert('Invalid credentials. Please try again.');
      }
    });