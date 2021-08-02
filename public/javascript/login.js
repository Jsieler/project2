async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
// function myFunctionZ() {
//   var element = document.getElementById("fakey")
//   element.classList.remove("hide3");
// }

function myFunctionX() {
  var element = document.getElementById("xyz2");
  element.classList.add("hide2")
  var element = document.getElementById("xyz");
  element.classList.remove("hide");
  var element = document.getElementById("fakebtn1");
  element.classList.add("hide");
  var element = document.getElementById("fakebtn2");
  element.classList.add("hide");
}

function myFunctionY() {
  var element = document.getElementById("xyz");
  element.classList.add("hide");
  var element = document.getElementById("xyz2");
  element.classList.remove("hide2");
  var element = document.getElementById("fakebtn1");
  element.classList.add("hide");
  var element = document.getElementById("fakebtn2");
  element.classList.add("hide");
}
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  