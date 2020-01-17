const targetMenu = document.querySelector("#overlay");
const targetModal = document.querySelector("#modal");
  
Webflow.push(function() {
 var clicked = "false";
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
