var $openButton = document.querySelector('.open-button');
var $modal = document.querySelector('.modal-off');
var $noButton = document.querySelector('.no-button');

function handleClick(event) {
  $modal.className = 'modal-on';
  if (event.target === $noButton) {
    $modal.className = 'modal-off';
  }
}

$openButton.addEventListener('click', handleClick);
$noButton.addEventListener('click', handleClick);
