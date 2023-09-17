const form = document.getElementById('form');
const email = document.getElementById('email');
const submit = document.getElementById('submit');

form.addEventListener('submit', e => {
  e.preventDefault();

  let emailValue = email.value.trim();
  let emailVerify = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailValue === ''){
    errorFunction('Please provide a valid email');
  } else if (!emailValue.match(emailVerify)){
    errorFunction('Looks like this is not an email');
  } else {
    successFunction();
  }
});

function errorFunction(message){
  const emailCon = document.getElementById('email');
  const span = document.getElementById('error-text');
  emailCon.classList.add('error');
  emailCon.classList.remove('success');
  span.innerText = message;
  span.className += 'error-text ';
  span.style.display = 'block';
};

function successFunction(){
  const emailCon = document.getElementById('email');
  const span = document.getElementById('error-text');
  emailCon.classList.add('success');
  emailCon.classList.remove('error');
  span.style.display = 'none';
}