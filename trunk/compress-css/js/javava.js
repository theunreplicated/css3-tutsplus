function compressCSS(id) {
	var compressField = document.getElementById(id),
		stripAllComment = document.getElementById('stripAllComment'),
		superCompact = document.getElementById('superCompact'),
		rep = compressField.value;
		if(stripAllComment.checked || superCompact.checked) {
			rep = rep.replace(/\/\*[\s\S]*?\*\//gm, "");
		}
		rep = rep.replace(/\t/g, "");
		rep = rep.replace(/\n\s+|\n+/g, "\n");
		rep = rep.replace(/\s+{([\n\s]+)/g, "{");
		rep = rep.replace(/;([\n\s]+)/g, ";");
		rep = rep.replace(/\s+}([\n\s]+)/g, "}\n");
		rep = rep.replace(/}\n}/g, "}}");
		rep = rep.replace(/(\s+{|{\s+)/g, "{");
		rep = rep.replace(/\n+/g, "\n");
		rep = rep.replace(/:\s+/g, ":");
		rep = rep.replace(/,\s+/g, ",");
		rep = rep.replace(/;}\s+/g, "}\n");
		rep = rep.replace(/:0px/g, ":0");
		rep = rep.replace(/ 0px/g, " 0");
		if(superCompact.checked) rep = rep.replace(/\n/g, "");
		compressField.value = rep;
		compressField.focus();
		compressField.select();
}

function beautifyCSS(id) {
		document.getElementById('stripAllComment').checked = false;
		compressCSS('beautify'); // Compress first...
	var beautifyField = document.getElementById(id),
		breakMultipleSelector = document.getElementById('breakSelector'),
		toTab = document.getElementById('tab'),
		rep = beautifyField.value;
		rep = rep.replace(/{/g, " {\n  ");
		rep = rep.replace(/;|;\s+/g, ";\n  ");
		rep = rep.replace(/;\n  |;\s+\n  /g, ";\n  ");
		rep = rep.replace(/;(\n|\n\s+|\s+\n)}/g, ";\n}");
		rep = rep.replace(/}/g, ";\n}\n");
		rep = rep.replace(/\{\n\s+;\n\}/g, "{}");
		rep = rep.replace(/\n;\n}/g, "\n}");
		rep = rep.replace(/\n}\n}/g, "\n}}");
		// Finishing...
		rep = rep.replace(/;\n  ;\n}/g, ";\n}");
		if(toTab.checked) rep = rep.replace(/\n +/g, "\n\t");
		rep = rep.replace(/;\n(  |\t)\/\*/g, "; /*");
		rep = rep.replace(/\n\*/g, "\n *");
		rep = rep.replace(/\n \*\//g, "\n *\/\n");
		rep = rep.replace(/@(media|-webkit|-moz|-ms|-o|keyframes)(.*[^\}])\n  /g, "@$1$2\n");
		rep = rep.replace(/ \* {/g, "\* {");
		rep = rep.replace(/ \*:/g, "\*:");
		if(breakMultipleSelector.checked) {
			rep = rep.replace(/,#/g, ",\n#"); // Break ID selectors
			rep = rep.replace(/,\./g, ",\n\."); // Break class selectors
			rep = rep.replace(/,\n#([0-9A-Fa-f]{3,6})/g, ",#$1"); // Re-inline Hex Code (something that looks like IDs)
			rep = rep.replace(/,\n\.([0-9])/g, ",.$1"); // Re-inline decimal number (something that looks like classes)
			// Break all tagName selectors
			rep = rep.replace(/,(html|style|body|div|dl|dt|dd|ul|ol|li|h1|h2|h3|h4|h5|h6|pre|code|form|fieldset|legend|input|button|textarea|p|blockquote|table|tbody|thead|th|td|fieldset|img|address|caption|cite|dfn|em|a|b|i|u|q|strong|var|select|option|optgroup|del|ins|abbr|acronym)/g, ",\n$1");
			rep = rep.replace(/,(article|aside|details|figcaption|figure|footer|header|hgroup|menu|nav|section|audio|canvas|video)/g, ",\n$1");
			rep = rep.replace(/,\ninset /g, ",inset ");
		}
		beautifyField.value = rep;
		beautifyField.focus();
		beautifyField.select();
}

function clearField(id) {
	var field = document.getElementById(id);
		field.value = "";
		field.focus();
}