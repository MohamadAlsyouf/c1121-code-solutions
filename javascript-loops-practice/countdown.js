/* exported countdown */
function countdown(number) {
  var countDownArray = [];
  var currentNumber = number;
  while (currentNumber >= 0) {
    countDownArray.push(currentNumber);
    currentNumber--;
  }
  return countDownArray;
}
