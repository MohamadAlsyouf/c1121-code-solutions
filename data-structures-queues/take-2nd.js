/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;
  const removed = queue.dequeue();
  queue.enqueue(removed);
  return queue.dequeue();
}
