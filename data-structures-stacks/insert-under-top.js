/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) return;
  const popped = stack.pop();
  stack.push(value);
  stack.push(popped);
}
