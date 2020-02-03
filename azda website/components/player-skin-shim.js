function load_player_CSS(ref) {
  var playerId = 'player-skin';
  if (!document.getElementById(playerId)) {
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
var dark_skin_player = 'https://rawcdn.githack.com/uworldlink/web/b010f8fb25a0f648d97f6555340fced63b742efc/azda website/css/dark-skin-player.css';

if (localStorage.getItem('themeSwitch') === null) {
  load_player_CSS(auto_skin_player);
}
else if (localStorage.getItem('themeSwitch') == 1) {
  load_player_CSS(light_skin_player);
}
else if (localStorage.getItem('themeSwitch') == 2) {
  load_player_CSS(dark_skin_player);
}
