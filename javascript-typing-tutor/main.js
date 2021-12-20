var $letters = document.querySelectorAll('span');
var $modal = document.querySelector('.modal-on');
var $playButton = document.querySelector('.play');

function handleClick(event) {
  if (event.target === $playButton) {
    $modal.className = 'modal-off';
  }
}

var currentLetter = 0;
$letters[0].setAttribute('class', 'current-letter');

function handleKeyDown(event) {
  if (event.key === $letters[currentLetter].textContent) {
    $letters[currentLetter].setAttribute('class', 'green-letter');
    currentLetter++;
    $letters[currentLetter].setAttribute('class', 'current-letter');
  } else {
    $letters[currentLetter].setAttribute('class', 'red-letter');
  }
}

document.addEventListener('keydown', handleKeyDown);
$playButton.addEventListener('click', handleClick);
