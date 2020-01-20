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

if (localStorage.getItem('themeSwitch') === null) {
  changeCSS(auto_theme);
}
else if (localStorage.getItem('themeSwitch') === 1) {
  changeCSS(light_theme);
}
else if (localStorage.getItem('themeSwitch') === 2) {
  changeCSS(dark_theme);
}
