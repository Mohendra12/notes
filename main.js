const correctPassword = 'mahi'; // Replace 'yourpassword' with the actual password
let isAuthenticated = false;

function validatePassword() {
  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    isAuthenticated = true;
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('container').style.display = 'block';
  } else {
    alert('Incorrect password. Please try again.');
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const coll = document.querySelectorAll('.collapsible');
  coll.forEach(function(item) {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});
