function changeCSS(ref) {
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
var light_theme = 'https://rawcdn.githack.com/uworldlink/web/c200e1d7b3747ef8400139d79398ac4b00101847/azda website/css/light-theme.css';
var dark_theme = 'https://rawcdn.githack.com/uworldlink/web/c200e1d7b3747ef8400139d79398ac4b00101847/azda website/css/dark-theme.css';

if (localStorage.getItem('themeSwitch') === null) {
  changeCSS(auto_theme);
}
else if (localStorage.getItem('themeSwitch') === 1) {
  changeCSS(light_theme);
}
else if (localStorage.getItem('themeSwitch') === 2) {
  changeCSS(dark_theme);
}
