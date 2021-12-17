var $tabContainer = document.querySelector('.tab-container');
var $allTabs = document.querySelectorAll('.tab');
var $allViews = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', handleClick);
function handleClick(e) {
  if (e.target.matches('.tab') !== true) {
    return;
  }
  for (var i = 0; i < $allTabs.length; i++) {
    if ($allTabs[i] === e.target) {
      $allTabs[i].className += ' active';
    } else {
      $allTabs[i].className = 'tab';
    }
  }
  var dataViewValue = e.target.getAttribute('data-view');
  for (i = 0; i < $allViews.length; i++) {
    if ($allViews[i].getAttribute('data-view') === dataViewValue) {
      $allViews[i].className = 'view';
    } else {
      $allViews[i].className = 'view hidden';
    }
  }
}
