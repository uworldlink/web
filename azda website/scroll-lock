const targetMenu = document.querySelector("#overlay");
const targetModal = document.querySelector("#modal");
const targetSlide = document.querySelector("#slide-touch");
  
Webflow.push(function() {

	var clicked = "false";
  $('.nav-overlay').click(function(e) {
    e.preventDefault();
    clicked = "false";
  });
  $('.w-nav-button').click(function(e) {
    e.preventDefault();
    if (clicked == "false") {
    bodyScrollLock.disableBodyScroll(targetMenu);
    clicked = "true";
    } else {
    bodyScrollLock.enableBodyScroll(targetMenu);
    clicked = "false";
    }
  });
});
  
$('.modal-open').click(function(e) {
  e.preventDefault();
  bodyScrollLock.disableBodyScroll(targetModal);
});
$('.modal-close').click(function(e) {
  e.preventDefault();
  bodyScrollLock.enableBodyScroll(targetModal);
});
  
$('.sliders').click(function(e) {
  e.preventDefault();
  bodyScrollLock.disableBodyScroll(targetSlide);
});
$('.contentsection2').click(function(e) {
  e.preventDefault();
  bodyScrollLock.clearAllBodyScrollLocks();
});
