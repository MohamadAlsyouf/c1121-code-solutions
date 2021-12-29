var $message = document.querySelector('.message');

function setMessage(newMessage) {
  $message.textContent = 'Hello There';
}

function delayedMessage() {
  var timeoutID = setTimeout(setMessage, 2000);
  return timeoutID;
}

document.addEventListener('DOMContentLoaded', delayedMessage);
