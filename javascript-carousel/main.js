var $view = document.querySelectorAll('.view');
var $circle = document.querySelectorAll('.fa-circle');
var $nextImage = document.querySelector('.fa-chevron-right');
var $prevImage = document.querySelector('.fa-chevron-left');
var $circleContainer = document.querySelector('.circle-container');

function updateCarousel(incrementing) {
  var currentView;
  for (var i = 0; i <= $view.length - 1; i++) {
    if (!$view[i].matches('.hidden')) {
      if (incrementing) {
        currentView = i + 1;
        if (currentView === $view.length) {
          currentView = 0;
        }
      } else {
        currentView = i - 1;
        if (currentView < 0) {
          currentView = $view.length - 1;
        }
      }
    }
    $view[i].className = 'view hidden';
    $circle[i].className = 'far fa-circle';
  }
  $view[currentView].className = 'view';
  $circle[currentView].className = 'fas fa-circle';
}

function updatingPhotos() {
  updateCarousel(true);
}
var interval = setInterval(updatingPhotos, 3000);

function rightArrow() {
  updateCarousel(true);
  clearInterval(interval);
  interval = setInterval(updatingPhotos, 3000);
}

function leftArrow() {
  updateCarousel(false);
  clearInterval(interval);
  interval = setInterval(updatingPhotos, 3000);
}

function circleClick(event) {
  var activeCircle = event.target.matches('.fa-circle');
  if (activeCircle) {
    var view = event.target.getAttribute('data-view');
    for (var i = 0; i < $circle.length; i++) {
      if ($circle[i].getAttribute('data-view') === view) {
        $circle[i].className = 'fas fa-circle';
      } else {
        $circle[i].className = 'far fa-circle';
      }
    }
    for (var j = 0; j < $view.length; j++) {
      if ($view[j].getAttribute('data-view') === view) {
        $view[j].className = 'view';
      } else {
        $view[j].className = 'view hidden';
      }
    }
  }
}

$nextImage.addEventListener('click', rightArrow);
$prevImage.addEventListener('click', leftArrow);
$circleContainer.addEventListener('click', circleClick);
