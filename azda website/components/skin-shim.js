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
var auto_theme = 'https://rawcdn.githack.com/uworldlink/web/ec2111033ff227dd47663d0f05aaf88473af8a55/azda website/css/default.css';
var light_theme = 'https://rawcdn.githack.com/uworldlink/web/290b3f732d9c1bc75e32ca152daef683cd837934/azda website/css/light-theme.css';
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
