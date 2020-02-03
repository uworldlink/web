$(document).ready(function() {
  $('.auto-button').click(function(e) {
  	e.preventDefault();
    $('#skin-player').attr("href", auto_skin_player);
	});
  $('.light-button').click(function(e) {
  	e.preventDefault();
    $('#skin-player').attr("href", light_skin_player);
	});
  $('.dark-button').click(function(e) {
  	e.preventDefault();
    $('#skin-player').attr("href", dark_skin_player);
	});
});
