$(function() {
	$(putEmoAbove).before('<div class="emoWrap"> :) ;) :( =( @@, :D :&#39;( T_T :Q :p :Ozz 7:O &#92;o/ &#92;m/ &amp;amp;lt;3 0:) ^o^ *fck* x@ :-d :-bd ~x( :cendol: *bang*</div>');
	var emo = function(emo, imgRep, emoKey) {
		$(emoRange).each(function() {
			$(this).html($(this).html()
			.replace(/<br>:/g, "<br> :")
			.replace(/<br>;/g, "<br> ;")
			.replace(/<br>=/g, "<br> =")
			.replace(/<br>\^/g, "<br> ^")
			.replace(emo, " <img src='https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
		});
	}
	emo(/\s:\)+/g, "smile.gif", ":)");
	emo(/\s;\)+/g, "wink.gif", ";)");
	emo(/\s:\(/g, "sad.gif", ":(");
	emo(/\s=\(/g, "sadanimated.gif", "=(");
	emo(/\s@@,/g, "rolleyes.gif", "@@,");
	emo(/\s:D/g, "haha.gif", ":D");
	emo(/\s:'\(/g, "cry.gif", ":&#39;(");
	emo(/\sT_T/ig, "tears.gif", "T_T");
	emo(/\s:Q/ig, "smoking.gif", ":Q");
	emo(/\s:p/ig, "wee.gif", ":p");
	emo(/\s:Oz+/ig, "sleep.gif", ":Ozz");
	emo(/\s7:O/ig, "angry.gif", "7:O");
	emo(/\s\\o\//ig, "applause.gif", "&#92;o/");
	emo(/\s\\m\//ig, "metal.gif", "&#92;m/");
	emo(/\s&lt;3/ig, "love.gif", "&amp;amp;lt;3");
	emo(/\s0:\)+/ig, "angelgreen.gif", "0:)");
	emo(/\s\^o\^/ig, "angelwhite.gif", "^o^");
	emo(/\s\*fck\*/ig, "fuck.gif", "*fck*");
	emo(/\sx\@/g, "marahbesar.gif", "x@");
	emo(/\s\X\@/g, "arrgh.gif", "X@");
	emo(/\s:-d/ig, "top.gif", ":-d");
	emo(/\s:-bd/ig, "topmarkotop.gif", ":-bd");
	emo(/\s\~x\(+/ig, "ugh.gif", "~x(");
	emo(/\s:cendol:/ig, "cendol.gif", ":cendol:");
	emo(/\s\*bang\*/ig, "bang.gif", "*bang*");
	// Show alert one times!
	$('div.emoWrap').one("click", function() {
		alert(emoMessage);
	});
	// Click to show the code!
	$('.emo').css('cursor', 'pointer').live("click", function() {
		$('.emoKey').remove();
		$(this).after('<input class="emoKey" type="text" size="' + this.alt.length + '" value=" ' + this.alt + '" />');
	});
	$('.emoKey').live("click", function() {
		$(this).focus().select();
	});

});