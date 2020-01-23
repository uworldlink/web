
const targetMenu = document.querySelector("#overlay");
const targetModal = document.querySelector("#modal");

document.ready(function() {
 var clicked = "false";
  $('.w-nav-button').click(function(e) {
    e.preventDefault();
    if (clicked == "false") {
    bodyScrollLock.lock(targetMenu);
    clicked = "true";
    } else {
    bodyScrollLock.unlock(targetMenu);
    clicked = "false";
    }
  });
});

$('.modal-open').click(function(e) {
  e.preventDefault();
  bodyScrollLock.lock(targetModal);
});
$('.modal-close').click(function(e) {
  e.preventDefault();
  bodyScrollLock.unlock(targetModal);
});
