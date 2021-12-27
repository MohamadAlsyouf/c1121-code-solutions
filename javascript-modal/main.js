var $openButton = document.querySelector('.open-button');
var $modal = document.querySelector('.modal-off');
var $noButton = document.querySelector('.no-button');

function handleClick(event) {
  if (event.target === $noButton) {
    $modal.className = 'modal-off';
  } else {
    $modal.className = 'modal-on';
  }
}

$openButton.addEventListener('click', handleClick);
$noButton.addEventListener('click', handleClick);
