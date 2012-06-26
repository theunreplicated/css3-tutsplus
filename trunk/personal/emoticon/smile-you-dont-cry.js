$(function() {
	$(putEmoAbove).before('<div class="emoWrap"> :) ;) :( =( @@, :D :&#39;( T_T :Q :p :Ozz 7:O &#92;o/ &#92;m/ &amp;amp;lt; 0:) ^o^ *fck* x@ :-d :-bd ~x( :cendol: *bang* &#39;&#39;J</div>');
	var emo = function(emo, imgRep, emoKey) {
		$(emoRange).each(function() {
			$(this).html($(this).html()
			.replace(/<br>:/g, "<br> :")
			.replace(/<br>;/g, "<br> ;")
			.replace(/<br>=/g, "<br> =")
			.replace(/<br>\^/g, "<br> ^")
			.replace(emo, " <img src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
		});
	}
	emo(/\s:\)+/g, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/smile.gif", ":)");
	emo(/\s;\)+/g, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/wink.gif", ";)");
	emo(/\s:\(/g, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/sad.gif", ":(");
	emo(/\s=\(/g, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/sadanimated.gif", "=(");
	emo(/\s@@,/g, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/rolleyes.gif", "@@,");
	emo(/\s:D/g, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/haha.gif", ":D");
	emo(/\s:'\(/g, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/cry.gif", ":&#39;(");
	emo(/\sT_T/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/tears.gif", "T_T");
	emo(/\s:Q/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/smoking.gif", ":Q");
	emo(/\s:p/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/wee.gif", ":p");
	emo(/\s:Oz+/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/sleep.gif", ":Ozz");
	emo(/\s7:O/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/angry.gif", "7:O");
	emo(/\s\\o\//ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/applause.gif", "&#92;o/");
	emo(/\s\\m\//ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/metal.gif", "&#92;m/");
	emo(/\s&lt;3/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/love.gif", "&amp;amp;lt;3");
	emo(/\s0:\)+/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/angelgreen.gif", "0:)");
	emo(/\s\^o\^/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/angelwhite.gif", "^o^");
	emo(/\s\*fck\*/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/fuck.gif", "*fck*");
	emo(/\sx\@/g, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/marahbesar.gif", "x@");
	emo(/\s\X\@/g, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/arrgh.gif", "X@");
	emo(/\s:-d/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/top.gif", ":-d");
	emo(/\s:-bd/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/topmarkotop.gif", ":-bd");
	emo(/\s\~x\(+/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/ugh.gif", "~x(");
	emo(/\s:cendol:/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/cendol.gif", ":cendol:");
	emo(/\s\*bang\*/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/bang.gif", "*bang*");
	emo(/\s\'\'J/ig, "https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/call.gif", "&#39;&#39;J");
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