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
var auto_theme = 'https://rawcdn.githack.com/uworldlink/web/28df23dcf4b284e52d9e86528895d3576f2d54df/azda website/css/theme_handler.css';
var light_theme = 'https://rawcdn.githack.com/uworldlink/web/204a1a9f937f5af55cf414c73e960f39e2e1ad75/azda website/css/light-theme.css';
var dark_theme = 'https://rawcdn.githack.com/uworldlink/web/204a1a9f937f5af55cf414c73e960f39e2e1ad75/azda website/css/dark-theme.css';

if (localStorage.getItem('themeSwitch') === null) {
  loadCSS(auto_theme);
  var current_theme = auto_mode;
}
else if (localStorage.getItem('themeSwitch') == 1) {
  loadCSS(light_theme);
  var current_theme = light_mode;
}
else if (localStorage.getItem('themeSwitch') == 2) {
  loadCSS(dark_theme);
  var current_theme = dark_mode;
}
