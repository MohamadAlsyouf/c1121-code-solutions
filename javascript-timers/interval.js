var $heading = document.querySelector('.countdown-display');

var currentNum = 4;
function countDown() {
  currentNum--;
  $heading.textContent = currentNum;
  if (currentNum < 1) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}

var intervalID = setInterval(countDown, 1000);
