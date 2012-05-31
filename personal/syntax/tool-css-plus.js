$(document).ready(function() {
	$('a[tool=tooltip]').mouseover(function(e) {
		var tip = $(this).attr('title');	
		$(this).attr('title','');
		$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"></div></div>');		
		$('#tooltip').fadeIn('200');
		$('#tooltip').fadeTo('10',0.9);
	}).mousemove(function(e) {
		$('#tooltip').css('top', e.pageY + 15 );
		$('#tooltip').css('left', e.pageX + -75 );
	}).mouseout(function() {
		$(this).attr('title',$('.tipBody').html());
		$(this).children('div#tooltip').remove();
	});
});