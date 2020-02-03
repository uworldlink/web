function load_player_CSS(ref) {
  var playerId = 'player-skin';
  if (!document.getElementById(cssId)) {
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = playerId;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = ref;
  link.media = 'all';
  head.appendChild(link);
  }
}
var auto_skin_player = 'https://rawcdn.githack.com/uworldlink/web/db61e0b5e9afdaa6744fcfa84fd102729b89112c/azda website/css/default.css';
var light_skin_player = 'https://rawcdn.githack.com/uworldlink/web/db61e0b5e9afdaa6744fcfa84fd102729b89112c/azda website/css/light-theme.css';
var dark_skin_player = 'https://rawcdn.githack.com/uworldlink/web/5032c4f6a3c2417cacba931c12bc95aebba09c88/azda website/css/dark-theme.css';

if (localStorage.getItem('themeSwitch') === null) {
  load_player_CSS(auto_skin_player);
}
else if (localStorage.getItem('themeSwitch') == 1) {
  load_player_CSS(light_skin_player);
}
else if (localStorage.getItem('themeSwitch') == 2) {
  load_player_CSS(dark_skin_player);
}
