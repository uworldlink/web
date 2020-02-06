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
var auto_theme = 'https://rawcdn.githack.com/uworldlink/web/67012c6bfd2ecb51f5d4dc97533234b9209b92bf/azda website/css/default.css';
var light_theme = 'https://rawcdn.githack.com/uworldlink/web/67012c6bfd2ecb51f5d4dc97533234b9209b92bf/azda website/css/light-theme.css';
var dark_theme = 'https://rawcdn.githack.com/uworldlink/web/5032c4f6a3c2417cacba931c12bc95aebba09c88/azda website/css/dark-theme.css';

if ((localStorage.getItem('themeSwitch') === null || localStorage.getItem('themeSwitch') == 0)) {
  loadCSS(auto_theme);
  var current_theme = '0';
}
else if (localStorage.getItem('themeSwitch') == 1) {
  loadCSS(light_theme);
  var current_theme = '1';
}
else if (localStorage.getItem('themeSwitch') == 2) {
  loadCSS(dark_theme);
  var current_theme = '2';
}
