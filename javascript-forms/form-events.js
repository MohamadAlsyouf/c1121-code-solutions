function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log('value of name:', event.target.value);
}

var $inputName = document.querySelector('#user-name');
$inputName.addEventListener('input', handleInput);
$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);

var $inputEmail = document.querySelector('#user-email');
$inputEmail.addEventListener('input', handleInput);
$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);

var $textAreaMessage = document.querySelector('#user-message');
$textAreaMessage.addEventListener('input', handleInput);
$textAreaMessage.addEventListener('focus', handleFocus);
$textAreaMessage.addEventListener('blur', handleBlur);
