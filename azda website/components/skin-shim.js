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
var auto_theme = 'https://raw.githubusercontent.com/uworldlink/web/master/azda%20website/css/default.css';
var light_theme = 'https://rawcdn.githack.com/uworldlink/web/a4f75c1177a6e414b71ffa135699cee6a3b1d466/azda website/css/light-theme.css';
var dark_theme = 'https://rawcdn.githack.com/uworldlink/web/a4f75c1177a6e414b71ffa135699cee6a3b1d466/azda website/css/dark-theme.css';

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
