var $bulbButton = document.querySelector('.bulb-button-off');
var $backGround = document.querySelector('.bG');
var bulbOff = true;

// Works but button stays black!
function handleClick(event) {
  if (bulbOff) {
    $bulbButton.className += ' bulb-button-on';
    $backGround.className += ' cream';
    bulbOff = false;
  } else {
    $bulbButton.className = 'bulb-button-off';
    $backGround.className = 'bG';
    bulbOff = true;
  }
}

$bulbButton.addEventListener('click', handleClick);
