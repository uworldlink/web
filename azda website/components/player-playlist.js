$(document).ready(function(){
  // loadPlaylist(target, apikey, limit = 20, myPlaylist); // LOAD JSON PLAYLIST
  loadPlaylist(target, apikey, limit, myPlaylist);  // LOAD YOUTUBE OR USER VIDEO LIST
  
}); // JQUERY READY END

function loadPlaylist(target, apikey, limit = 20, myPlaylist) {
  
  $("li.pls-playing").removeClass("pls-playing");
  $(".plyr-playlist-wrapper").remove();
  
  limit = limit-1;
  
  if (myPlaylist) {

    PlyrPlaylist(".plyr-playlist", myPlaylist, limit);
    //return 
  } else{
    
    var ytplaylist = $(target).attr("data-ytpls");
    var ytuser = $(target).attr("data-user");

    //if ($('.js-player[data-ytpls]').length > 0){
    if (ytplaylist) {
      getTYPlaylist(ytplaylist, apikey, limit)
      //alert(ytplaylist);
    } else if (ytuser) {
      alert(ytuser);
    }
    
  }

function getTYPlaylist(playlistId, apikey, limit) {
  
  $.ajax({
    url:
      "https://content.googleapis.com/youtube/v3/playlistItems?&key=" +
      apikey +
      "&maxResults=" +
      limit +
      "&part=id,snippet&playlistId=" +
      playlistId +
      "&type=video",
    dataType: "jsonp",
    success: function(data) {
      console.log(data.items);
      //console.log(data.items[0].snippet.title);

      resultData = youtubeParser(data);

      console.log(resultData);

      PlyrPlaylist(".plyr-playlist", resultData, limit);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert(textStatus, +" | " + errorThrown);
    }
  });
  
}

  //PlyrPlaylist(".plyr-playlist", myPlaylist);

  function PlyrPlaylist(target, myPlaylist, limit) {
    $('<div class="plyr-playlist-wrapper"><ul class="plyr-playlist"></ul></div>').insertAfter("#player");

    var startwith = 0; // Maybe a playlist option to start with choosen video

    var playingclass = "";
    var items = [];
    //var playing == 1 ;
    $.each(myPlaylist, function(id, val) {
      if (0 === id) playingclass = "pls-playing";
      else playingclass = "";

      items.push(
        '<li class="' +playingclass +'"><a href="#" data-type="' +val.sources[0].type +'" data-video-id="' +val.sources[0].src +'"><img class="plyr-miniposter" src="' + val.poster + '"> ' +
val.title +" - " +val.author +"</a></li> ");
      
      if (id == limit) 
        return false;
      
    });
    $(target).html(items.join(""));
    
    setTimeout(function(){ 
      //$(target+" .pls-playing").find("a").trigger("click");
      
    }, 500);
  }

  players[0].on("ready", function(event) {
    //$(".plyr-playlist .pls-playing").find("a").one().trigger("click");
    console.log("Ready.....................................................");
    players[0].play();
    
    
    if(addbuttons){
      
      $(".plyr-playlist .pls-playing").find("a").trigger("click");
      
      $('<button type="button" class="plyr-prev"><i class="fa fa-step-backward fa-lg"></i></button>').insertBefore('.plyr__controls [data-plyr="play"]');

      $('<button type="button" class="plyr-next"><i class="fa fa-step-forward fa-lg"></i></button>').insertAfter('.plyr__controls [data-plyr="pause"]');
      
      addbuttons = false ;
    }
    
  }).on("ended", function(event) {
    var $next = $(".plyr-playlist .pls-playing")
      .next()
      .find("a")
      .trigger("click");
    //$next.parent().addClass("pls-playing");
  });

    // hack, play the first video in the playlist
    //$(".plyr-playlist .pls-playing").find("a").trigger("click");
    //$(target).find("pls-playing a").trigger("click");
    // setTimeout(function(){ 
    //       $(".plyr-playlist .pls-playing").find("a").trigger("click");
    // }, 500);

  $(document).on("click", "ul.plyr-playlist li a", function(event) {
    //$("ul.plyr-playlist li a").on("click", function(event) {
    event.preventDefault();

    $("li.pls-playing").removeClass("pls-playing");
    $(this)
      .parent()
      .addClass("pls-playing");

    var video_id = $(this).data("video-id");
    var video_type = $(this).data("type");
    var video_title = $(this).text();

    //alert(video_id);

    players[0].source({
      type: "video",
      title: "video_title",
      sources: [{ src: video_id, type: video_type }]
    });

    //ScrollTo($(".pls-playing").attr("href"), 500,0,10);

    $(".plyr-playlist").scrollTo(".pls-playing", 300);

    // players[0].on("ended", function(event) {
    //   console.log("test");
    // });
  })
  .on("click", ".plyr-prev", function(event) {
    var $next = $(".plyr-playlist .pls-playing")
      .prev()
      .find("a")
      .trigger("click");
  })
  .on("click", ".plyr-next", function(event) {
    var $next = $(".plyr-playlist .pls-playing")
      .next()
      .find("a")
      .trigger("click");
  });

  ///////////////////////

  // GET YOUTUBE PLAYLIST
  /* YOUTUBE PLAYLIST PARSER */
  // http://jsfiddle.net/onigetoc/cb2u1y4k/
  function youtubeParser(data) {
    var new_Data = data.items.map(function(item) {
      var thumb;

      if (item.snippet.thumbnails) {
        if (item.snippet.thumbnails.default)
          //live?
          thumb = item.snippet.thumbnails.default.url;

        if (item.snippet.thumbnails.medium)
          //live?
          thumb = item.snippet.thumbnails.default.url;
      }

      return {
        //type: "youtube",
        title: item.snippet.title,
        description: item.snippet.description,
        author: item.snippet.channelTitle,
        sources: [{ 
          src: item.snippet.resourceId.videoId, 
          type: item.kind.split('#')[0] 
        }],
        poster: thumb
      };
    });

    console.log(new_Data);

    // var output = {
    //   item: new_Data
    // };

    return new_Data;
  }
}

/****** GC ScrollTo **********/
// mine: https://jsfiddle.net/onigetoc/5kh0e5f4/
// https://stackoverflow.com/questions/2346011/how-do-i-scroll-to-an-element-within-an-overflowed-div
jQuery.fn.scrollTo = function(elem, speed, margin) {
  jQuery(this).animate(
    {
      scrollTop:
        jQuery(this).scrollTop() -
        jQuery(this).offset().top +
        jQuery(elem).offset().top
    },
    speed == undefined ? 1000 : speed
  );
  return this;
};
