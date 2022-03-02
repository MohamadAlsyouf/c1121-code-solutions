/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return;
  const removed = queue.dequeue();
  queue.enqueue(removed);
}
