
themeSelect(current_theme);

function themeSelect(state) {
  if (state == 'auto_mode') {
    $('#auto-mode').show();
    $('#light-mode').hide();
    $('#dark-mode').hide();
  } 
  else if (state == 'light-mode') {
    $('#auto-mode').hide();
    $('#light-mode').show();
    $('#dark-mode').hide();
  }
  else if (state == 'dark-mode') {
    $('#auto-mode').hide();
    $('#light-mode').hide();
    $('#dark-mode').show();
  }
}

$(document).ready(function() {
  $('.auto-button').click(function(e) {
  	e.preventDefault();
  	localStorage.removeItem('themeSwitch');
    $('#skin').attr("href", auto_theme);
    themeSelect('auto_mode');
	});
  $('.light-button').click(function(e) {
  	e.preventDefault();
    localStorage.setItem('themeSwitch', 1);
    $('#skin').attr("href", light_theme);
    themeSelect('light_mode');
	});
  $('.dark-button').click(function(e) {
  	e.preventDefault();
  	localStorage.setItem('themeSwitch', 2);
    $('#skin').attr("href", dark_theme);
    themeSelect('dark_mode');
	});
});
