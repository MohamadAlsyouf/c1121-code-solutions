var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);

function handleClick(e) {
  console.log('e.target:', e.target);
  console.log('e.target.tagName:', e.target.tagName);
  if (e.target && e.target.tagName === 'BUTTON') {
    var closestEl = e.target.closest('.task-list-item');
    console.log('closest .task-list-item:', closestEl);
    closestEl.remove();
  }
}
