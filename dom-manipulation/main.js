var buttonClickedCount = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
function incrementClickCount(event) {
  buttonClickedCount++;
  $clickCount.textContent = 'Clicks: ' + buttonClickedCount;
  if (buttonClickedCount < 4) {
    $hotButton.className += ' cold';
  } else if (buttonClickedCount < 7) {
    $hotButton.className += ' cool';
  } else if (buttonClickedCount < 10) {
    $hotButton.className += ' tepid';
  } else if (buttonClickedCount < 13) {
    $hotButton.className += ' warm';
  } else if (buttonClickedCount < 16) {
    $hotButton.className += ' hot';
  } else {
    $hotButton.className += ' nuclear';
  }
}
$hotButton.addEventListener('click', incrementClickCount);
