/* exported getLength */

function getLength(list) {
  let counter = 1;
  while (list.next !== null) {
    list = list.next;
    counter++;
  }
  return counter;
}
