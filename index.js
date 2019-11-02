var email = document.getElementById('email');
var form = document.getElementById('form');
var error = document.getElementById('error');

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

form.addEventListener('submit', function(e) {
  var messages = [];
  if (email.value === '' || email.value == null || !validateEmail(email.value)) {
    messages.push('Please provide a valid email');
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(', ');
    email.classList.add('error-input');
  }
});
