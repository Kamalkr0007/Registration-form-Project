const form = document.getElementById('registration-form');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Generate a random password
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let pass = '';
  for (let i = 0; i < 8; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  password.value = pass;

  // Save the user's information locally
  const user = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    phone: form.elements.phone.value,
    address: form.elements.address.value,
    password: password.value
  };
  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = 'login.html';
  alert('Registration successful! Your password is: ' + pass);
});