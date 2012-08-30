$(function(){
	
	var v = $('#video').attr('class').split('video-')[1],
		player = false,
		key = 'AI39si73J88KqOpnS0qufASk1veyM38Bx1c2n4FNr--LoSh3hQrNI6BT9PsWblRvP_gbX2sQ651gR0ThY1lCABwSL5aFedgPqQ',
		url = 'http://gdata.youtube.com/feeds/api/videos/'+v+'?callback=?&key='+key+'&format=5&alt=json';
	
	$('#video-'+v).live('player', function(){
		$(this).tubeplayer({
			width: 500,
			height: 350,
			initialVideo: v,
			allowFullScreen: false,
			onPlayerPlaying: function(){
				$('.controls').find('.play').addClass('pause').removeClass('play');
			},
			onPlayerPaused: function(){
				$('.controls').find('.pause').removeClass('pause').addClass('play');
			},
			onPlayerEnded: function(){
				$('.controls').find('.pause').removeClass('pause').addClass('play');
			},
			onStop: function(){
				$('.controls').find('.pause').removeClass('pause').addClass('play');
			}
		});
		if (!$(this).find('.stop').length)
			$(this).prepend($('<a />').attr('href', '#').addClass('stop').text('Stop'));
		player = true;
	});
	
	$.getJSON(url, function(response){
			var html = '',
				video = response.entry,
				title = video.title.$t,
				category = video.media$group.media$category[0].label,
				thumb = video.media$group.media$thumbnail[2].url,
				views = video.yt$statistics.viewCount,
				favs = video.yt$statistics.favoriteCount,
				duration = video.media$group.yt$duration.seconds;
			html += '<div class="image">';
			html += '<img src="'+thumb+'" alt="" />';
			html += '<div class="controls"><a href="#" class="play">Play</a></div>';
			html += '</div>';
			html += '<div class="entry">';
			html += '<p class="title">'+title+' ('+parseInt(duration/60)+':'+duration%60+')</p>';
			html += '<span>Views: '+views+'</span>';
			html += '<span>Category: '+category+'</span>';
			html += '<span class="favs">'+favs+'</span>';
			html += '</div>';
			$('#video').html(html).after(
				$('<div />').attr('id', 'video-'+v).addClass('ytube')
			);
	});
	
	
	$('.controls').find('.play').live('click', function(){
		player == true ? $('#video-'+v).tubeplayer('play') : $('#video-'+v).fadeIn().trigger('player');
		return false;
	});
	
	$('.controls').find('.pause').live('click', function(){
		$('#video-'+v).tubeplayer('pause');
		return false;
	});
	
	$('#video-'+v).find('.stop').live('click', function(){
		$('#video-'+v).tubeplayer('stop').fadeOut();
		player = false;
		return false;
	});	
			
});