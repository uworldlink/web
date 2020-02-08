

jQuery(function ($) {
    'use strict'
    var supportsVideo = !!document.createElement('video').canPlayType;
    if (supportsVideo) {
        // initialize plyr
        var player = new Plyr('#video1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });
        // initialize playlist and controls
        player.on('play', function () {
                playing = true;
                console.log("play:", "true");
                npAction.text('Now Playing...');
            });
        player.on('pause', function () {
                playing = false;
                console.log("play:", "false");
                npAction.text('Paused...');
            });
        player.on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    player.play();
                } else {
                    player.pause();
                    index = 0;
                    loadTrack(index);
                }
            });
        var index = 0,
            playing = false,
            //mediaPath = 'https://archive.org/download/mythium/',
            //extension = '',
            tracks = [{
                "track": 1,
                "name": "Ephemere",
                "duration": "2:46",
                "link": {
                    type: 'video',
                    sources: [
                        {
                            src: '1j2-tSap_P8',
                            provider: 'youtube',
                        },
                    ],
                }
            }, {
                "track": 2,
                "name": "Heritage",
                "duration": "8:30",
                "link": {
                    type: 'video',
                    sources: [
                        {
                            src: 'aH7nE6MXJyo',
                            provider: 'youtube',
                        },
                    ],
                }
            }, {
                "track": 3,
                "name": "All The King's Men - Broadwing Studio (Final Mix)",
                "duration": "5:01",
                "link": "BS_ATKM"
            }, {
                "track": 4,
                "name": "The Forsaken - Broadwing Studio (First Mix)",
                "duration": "8:31",
                "link": "BSFM_TF"
            }, {
                "track": 5,
                "name": "All The King's Men - Broadwing Studio (First Mix)",
                "duration": "5:05",
                "link": "BSFM_ATKM"
            }, {
                "track": 6,
                "name": "All This Is - Alternate Cuts",
                "duration": "2:48",
                "link": "AC_ATI"
            }, {
                "track": 7,
                "name": "All The King's Men (Take 1) - Alternate Cuts",
                "duration": "5:44",
                "link": "AC_ATKMTake_1"
            }, {
                "track": 8,
                "name": "All The King's Men (Take 2) - Alternate Cuts",
                "duration": "5:26",
                "link": "AC_ATKMTake_2"
            }, {
                "track": 9,
                "name": "Magus - Alternate Cuts",
                "duration": "5:46",
                "link": "AC_M"
            }, {
                "track": 10,
                "name": "The State Of Wearing Address (fucked up) - Alternate Cuts",
                "duration": "5:25",
                "link": "AC_TSOWAfucked_up"
            }, {
                "track": 11,
                "name": "Magus - Popeye's (New Years '04 - '05)",
                "duration": "5:53",
                "link": "PNY04-05_M"
            }, {
                "track": 12,
                "name": "On The Waterfront - Popeye's (New Years '04 - '05)",
                "duration": "4:40",
                "link": "PNY04-05_OTW"
            }, {
                "track": 13,
                "name": "Trance - Popeye's (New Years '04 - '05)",
                "duration": "13:15",
                "link": "PNY04-05_T"
            }, {
                "track": 14,
                "name": "The Forsaken - Popeye's (New Years '04 - '05)",
                "duration": "8:12",
                "link": "PNY04-05_TF"
            }, {
                "track": 15,
                "name": "The State Of Wearing Address - Popeye's (New Years '04 - '05)",
                "duration": "7:02",
                "link": "PNY04-05_TSOWA"
            }, {
                "track": 16,
                "name": "Magus - Popeye's (Valentine's Day '05)",
                "duration": "5:43",
                "link": "PVD_M"
            }, {
                "track": 17,
                "name": "Trance - Popeye's (Valentine's Day '05)",
                "duration": "10:45",
                "link": "PVD_T"
            }, {
                "track": 18,
                "name": "The State Of Wearing Address - Popeye's (Valentine's Day '05)",
                "duration": "5:36",
                "link": "PVD_TSOWA"
            }, {
                "track": 19,
                "name": "All This Is - Smith St. Basement (01/08/04)",
                "duration": "2:48",
                "link": "SSB01_08_04_ATI"
            }, {
                "track": 20,
                "name": "Magus - Smith St. Basement (01/08/04)",
                "duration": "5:46",
                "link": "SSB01_08_04_M"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            video = $('#video1').get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        player.play();
                    }
                } else {
                    player.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        player.play();
                    }
                } else {
                    player.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                player.source = tracks[id].link;
                //updateDownload(id, video.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                player.play();
            };
        //extension = video.canPlayType('video/mp4') ? '.mp4' : video.canPlayType('video/webm') ? '.webm' : '';
        loadTrack(index);
    } else {
        // no video support
        $('.column').addClass('hidden');
        var noSupport = $('#video1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
