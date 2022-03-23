/* exported removeNext */

function removeNext(list) {
  if (list.next) {
    const rest = list.next.next;
    list.next = rest;
  }
}
