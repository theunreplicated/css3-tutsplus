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
	emo(/\s:\)+/g, "emo/smile.gif", ":)");
	emo(/\s;\)+/g, "emo/wink.gif", ";)");
	emo(/\s:\(/g, "emo/sad.gif", ":(");
	emo(/\s=\(/g, "emo/sadanimated.gif", "=(");
	emo(/\s@@,/g, "emo/rolleyes.gif", "@@,");
	emo(/\s:D/g, "emo/haha.gif", ":D");
	emo(/\s:'\(/g, "emo/cry.gif", ":&#39;(");
	emo(/\sT_T/ig, "emo/tears.gif", "T_T");
	emo(/\s:Q/ig, "emo/smoking.gif", ":Q");
	emo(/\s:p/ig, "emo/wee.gif", ":p");
	emo(/\s:Oz+/ig, "emo/sleep.gif", ":Ozz");
	emo(/\s7:O/ig, "emo/angry.gif", "7:O");
	emo(/\s\\o\//ig, "emo/applause.gif", "&#92;o/");
	emo(/\s\\m\//ig, "emo/metal.gif", "&#92;m/");
	emo(/\s&lt;3/ig, "emo/love.gif", "&amp;amp;lt;3");
	emo(/\s0:\)+/ig, "emo/angelgreen.gif", "0:)");
	emo(/\s\^o\^/ig, "emo/angelwhite.gif", "^o^");
	emo(/\s\*fck\*/ig, "emo/fuck.gif", "*fck*");
	emo(/\sx\@/g, "emo/marahbesar.gif", "x@");
	emo(/\s\X\@/g, "emo/arrgh.gif", "X@");
	emo(/\s:-d/ig, "emo/top.gif", ":-d");
	emo(/\s:-bd/ig, "emo/topmarkotop.gif", ":-bd");
	emo(/\s\~x\(+/ig, "emo/ugh.gif", "~x(");
	emo(/\s:cendol:/ig, "emo/cendol.gif", ":cendol:");
	emo(/\s\*bang\*/ig, "emo/bang.gif", "*bang*");
	emo(/\s\'\'J/ig, "emo/call.gif", "&#39;&#39;J");
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