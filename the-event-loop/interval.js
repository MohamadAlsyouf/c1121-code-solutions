let currentCount = 3;

function blastOff() {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}

const intervalID = setInterval(blastOff, 1000);
