/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const oldHead = list.data;
  list.data = list.next.data;
  list.next.data = oldHead;
  return list;
}
