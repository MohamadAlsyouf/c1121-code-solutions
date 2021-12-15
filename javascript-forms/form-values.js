var $formElements = document.querySelector('#contact-form');

function handleSubmit(event) {
  var name = $formElements.elements.name.value;
  var email = $formElements.elements.email.value;
  var message = $formElements.elements.message.value;
  console.log({ name, email, message });
  event.preventDefault();
  $formElements.reset();
}

var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', handleSubmit);
