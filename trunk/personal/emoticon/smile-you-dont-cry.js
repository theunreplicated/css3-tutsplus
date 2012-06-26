$(function() {
	$(putEmoAbove).before('<div class="emoWrap"> :) ;) :( =( @@, :D :&#39;( T_T :Q :p :Ozz 7:O &#92;o/ &#92;m/ &amp;amp;lt;3 0:) ^o^ *fck* x@ :-d :-bd ~x( :cendol: *bang*</div>');
	var emo = function(emo, imgRep, emoKey) {
		$(emoRange).each(function() {
			$(this).html($(this).html()
			.replace(/<br>:/g, "<br> :")
			.replace(/<br>;/g, "<br> ;")
			.replace(/<br>=/g, "<br> =")
			.replace(/<br>\^/g, "<br> ^")
			.replace(emo, " <img src='https://css3-tutsplus.googlecode.com/svn/trunk/personal/emoticon/emo/" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />")
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
// syntax
$(window).load(function() {
    $('i').each(function() {
        var list = "(true|false|null|main|in|endif|if|endfor|for|while|finally|var|new|function|do|return|void|else|break|catch|instanceof|with|throw|case|default|try|this|switch|continue|typeof|delete)",
            rep1 = new RegExp(list + " ", "ig"),
            rep2 = new RegExp(list + "( ?)<span", "ig"),
            $this = $(this);
        $this.html($this.html()
        .replace(/(<br>|\n)$/ig, "")
        .replace(/(\t)/ig, "    ")
        .replace(/&quot;/ig, "\"")
        .replace(/&#39;|&apos;/ig, "\'")
        .replace(/(.?)'(.*?)'/g, "$1<span class='str'>\'$2\'</span>")
        .replace(/(.?)"(.*?)"/g, "$1<span class='str'>\"$2\"</span>")
        .replace(/(.?)(""|'')/g, "$1<span class='value'>$2</span>")
        .replace(/(#[A-F0-9]{3,6})/ig, "<span class='hex'>$1</span>")
        .replace(/(\d+(?!(.*&lt;)))/g, "<span class='num'>$1</span>")
        .replace(/((#|\.)[\-_A-Z0-9]+)/ig, "<span class='selector'>$1</span>")
        .replace(/(\{|\}|\(|\)|\[|\])/g, "<span class='bracket'>$1</span>")
        .replace(/&lt;(.*?)&gt;/g, "<span class='tag'>&lt;$1&gt;</span>")
        .replace(/&lt;!--([\s\S]*?)--&gt;/gm, "<span class='comment'>&lt;!--$1--&gt;</span>")
        .replace(/\/\*([\s\S]*?)\*\//gm, "<span class='comment'>/*$1*/</span>")
        .replace(/[^:]\/\/(.*)/g, "<span class='comment'>//$1</span>")
        .replace(/<\/span>\/(.*)\/([gim]+),( ?)<span class='str'>/g, "</span><span class='regexp'>/$1/$2</span>, <span class='str'>")
        .replace(rep1, "<span class='keyword'>$1</span> ")
        .replace(rep2, "<span class='keyword'>$1</span>$2<span")
        .replace(/function<\/span> (.[^<]*)<span/g, "function</span> <span class='name'>$1</span><span")
        .replace(/([\-_A-Z]+)(?=(\s+|)):(.(?!\{)*)/ig, "<span class='attribute'>$1</span>:$2$3")
        .replace(/h<span class='num'>([1-6])<\/span>/ig, "h$1")
        .replace(/!important/ig, "<mark class='important'>!important</mark>")
        .replace(/&lt;!(doctype)(.*)&gt;/ig, "<span class='doctype'>&lt;!$1$2&gt;</span>")
        .replace(/@<span class='attribute'>(import|page|media|charset|keyframes|font-face)<\/span>/ig, "@$1")
        .replace(/(@(import|page|media|charset|keyframes|font-face))/ig, "<span class='keyword'>$1</span>")
        .replace(/<span class='bracket'>\[<\/span>(.*)<span class='bracket'>\]<\/span>/ig, "<span class='array'>[$1]</span>")
        ).find('.str span, .regexp span, .comment span, .doctype span, .hex span, .array span, .url span').contents().unwrap();
        $this.append('<div class="the-num"></div>');

        // Insert the line number
        var num = $this.html().split(/\n|<br>/).length,
            count = 0;
        for (var i = 0; i < num; ++i) {
            count = count + 1;
            $this.find('.the-num').append(count + '.<br/>');
        }
        $this.css('padding-left', $this.find('.the-num').outerWidth()+14);

    });
});