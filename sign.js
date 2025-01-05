/*const users = [{ 
    username: 'admin',
    password: '11111111',
    role: 'admin'
  },
  { username: 'user',
    password: '22222222',
    role: 'user'
  }
];

function login(){
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;


  const user = users.find(log => log.username === username && log.password === password);

  if(user) {
    localStorage.setItem('role', user.role);
    if(user.role === 'admin'){
      window.location.href = './admin/dashboard.html';
    }
    else if(user.role === 'user'){
      window.location.href = './user/home.html';
    }
    else{
      alert('Invalid credentials. Please try again.');
    }
  }
  else{
    alert('Invalid email or password');
  }
}*/

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