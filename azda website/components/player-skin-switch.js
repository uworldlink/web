
function changeSkin(set_skin){
	if(set_skin == 0){
		$('#player-skin').attr("href", auto_skin_player);
	}
	if(set_skin == 1){
		$('#player-skin').attr("href", light_skin_player);
	}
	if(set_skin == 2){
		$('#player-skin').attr("href", dark_skin_player);
	}
}
