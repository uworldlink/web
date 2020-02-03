function loadCSS(ref) {
  var cssId = 'skin';
  if (!document.getElementById(cssId)) {
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = cssId;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = ref;
  link.media = 'all';
  head.appendChild(link);
  }
}
var auto_theme = 'https://rawcdn.githack.com/uworldlink/web/ffc6f6c237c60c15e12cee18daca6af5d4692127/azda website/css/default.css';
var light_theme = 'https://rawcdn.githack.com/uworldlink/web/ffc6f6c237c60c15e12cee18daca6af5d4692127/azda website/css/light-theme.css';
var dark_theme = 'https://rawcdn.githack.com/uworldlink/web/5032c4f6a3c2417cacba931c12bc95aebba09c88/azda website/css/dark-theme.css';

if (localStorage.getItem('themeSwitch') === null) {
  loadCSS(auto_theme);
  var current_theme = 'auto_mode';
}
else if (localStorage.getItem('themeSwitch') == 1) {
  loadCSS(light_theme);
  var current_theme = 'light_mode';
}
else if (localStorage.getItem('themeSwitch') == 2) {
  loadCSS(dark_theme);
  var current_theme = 'dark_mode';
}
