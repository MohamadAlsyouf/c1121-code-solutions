/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek === undefined) return;
  while (index > 0) {
    queue.enqueue(queue.dequeue());
    index--;
  }
  return queue.dequeue();
}
