const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Retrieve the user's information from local storage
  const user = JSON.parse(localStorage.getItem('user'));

  // Check the email and password against the locally saved information
  if (form.elements.email.value === user.email && form.elements.password.value === user.password) {
    alert('Login successful!');
    // Redirect to the welcome page or display the welcome page
    window.location.href = 'welcome.html';
  } else {
    alert('Incorrect email or password. Please try again.');
  }
});