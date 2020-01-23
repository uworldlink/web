import { lock, unlock } from 'https://cdn.jsdelivr.net/npm/tua-body-scroll-lock/dist/tua-bsl.esm.browser.min.js'

const targetMenu = document.querySelector("#overlay");
const targetModal = document.querySelector("#modal");

document.push(function() {
 var clicked = "false";
  $('.w-nav-button').click(function(e) {
    e.preventDefault();
    if (clicked == "false") {
    lock(targetMenu);
    clicked = "true";
    } else {
    unlock(targetMenu);
    clicked = "false";
    }
  });
});

$('.modal-open').click(function(e) {
  e.preventDefault();
  lock(targetModal);
});
$('.modal-close').click(function(e) {
  e.preventDefault();
  unlock(targetModal);
});
