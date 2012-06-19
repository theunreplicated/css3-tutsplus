/*
	 Button Builder
	 by Norm
	 http://uiparade.com	 
	 Props to Chris Coyier @ http://css-tricks.com for the orignal base coding.
*/
var cssText              = '',
    forValue             = '';

var cssStuff = new Array();

cssStuff['buttonPadding']           = "10.5px 21px";
cssStuff['backgroundTop']           = "#65a9d7";
cssStuff['backgroundBottom']        = "#3e779d";
cssStuff['backgroundTopHover']      = "#65a9d7";
cssStuff['backgroundBottomHover']   = "#3e779d";
cssStuff['backgroundTopActive']     = "#3e779d";
cssStuff['backgroundBottomActive']  = "#65a9d7";
cssStuff['borderThickness']         = "1px";
cssStuff['borderColor']             = "#0a3c59";
cssStuff['borderColorHover']        = "#0a3c59";
cssStuff['borderColorActive']       = "#0a3c59";
cssStuff['borderRadius']            = "6px";
cssStuff['textColor']               = "#06426c";
cssStuff['textColorHover']          = "#fff";
cssStuff['textColorActive']         = "#fff";
cssStuff['textShadow']              = "#7ea4bd";
cssStuff['textShadowHover']         = "#1e4158";
cssStuff['textShadowActive']        = "#1e4158";
cssStuff['fontSize']                = "14px";
cssStuff['fontStack']               = "helvetica, serif";
cssStuff['innerHighlight']          = "1px";
cssStuff['outerHighlight']          = "1px";
    
function createCSS() {    
    cssText              = ".button { ";
    cssText             += "     border: " + cssStuff['borderThickness'] + " solid " + cssStuff['borderColor'] + ";";
    
    cssText             += "     background: " + cssStuff['backgroundBottom'] + ";";
    cssText             += "     background: -webkit-gradient(linear, left top, left bottom, from(" + cssStuff['backgroundTop'] + "), to(" + cssStuff['backgroundBottom'] + "));";
    cssText             += "     background: -webkit-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
    cssText             += "     background: -moz-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
    cssText             += "     background: -ms-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
    cssText             += "     background: -o-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
	cssText             += "     background-image: -ms-linear-gradient(top, " + cssStuff['backgroundTop'] + " 0%, " + cssStuff['backgroundBottom'] + " 100%);";
    
    cssText             += "     padding: " + cssStuff['buttonPadding'] + ";";
    
    cssText             += "     -webkit-border-radius: " + cssStuff['borderRadius'] + ";";
    cssText             += "     -moz-border-radius: " + cssStuff['borderRadius'] + ";";
    cssText             += "     border-radius: " + cssStuff['borderRadius'] + ";";
    
    cssText             += "     -webkit-box-shadow: rgba(255,255,255,0.4) 0 " + cssStuff['outerHighlight'] + " 0, inset rgba(255,255,255,0.4) 0 " + cssStuff['innerHighlight'] + " 0;";
    cssText             += "     -moz-box-shadow: rgba(255,255,255,0.4) 0 " + cssStuff['outerHighlight'] + " 0, inset rgba(255,255,255,0.4) 0 " + cssStuff['innerHighlight'] + " 0;" ;
    cssText             += "     box-shadow: rgba(255,255,255,0.4) 0 " + cssStuff['outerHighlight'] + " 0, inset rgba(255,255,255,0.4) 0 " + cssStuff['innerHighlight'] + " 0;";
    
    cssText             += "     text-shadow: " + cssStuff['textShadow'] + " 0 1px 0;";
    
    cssText             += "     color: " + cssStuff['textColor'] + ";";
    cssText             += "     font-size: " + cssStuff['fontSize'] + ";";
    cssText             += "     font-family: " + cssStuff['fontStack'] + ";";
    cssText             += "     text-decoration: none;";
    cssText             += "     vertical-align: middle;";
    
    cssText             += "} ";
    
    cssText             += ".button:hover { ";
    cssText             += "     border: " + cssStuff['borderThickness'] + " solid " + cssStuff['borderColorHover'] + ";";
	cssText             += "     text-shadow: " + cssStuff['textShadowHover'] + " 0 1px 0;";
    cssText             += "     background: " + cssStuff['backgroundBottomHover'] + ";";
    cssText             += "     background: -webkit-gradient(linear, left top, left bottom, from(" + cssStuff['backgroundTopHover'] + "), to(" + cssStuff['backgroundBottomHover'] + "));";
    cssText             += "     background: -webkit-linear-gradient(top, " + cssStuff['backgroundTopHover'] + ", " + cssStuff['backgroundBottomHover'] + ");";
    cssText             += "     background: -moz-linear-gradient(top, " + cssStuff['backgroundTopHover'] + ", " + cssStuff['backgroundBottomHover'] + ");";
    cssText             += "     background: -ms-linear-gradient(top, " + cssStuff['backgroundTopHover'] + ", " + cssStuff['backgroundBottomHover'] + ");";
    cssText             += "     background: -o-linear-gradient(top, " + cssStuff['backgroundTopHover'] + ", " + cssStuff['backgroundBottomHover'] + ");";
	cssText             += "     background-image: -ms-linear-gradient(top, " + cssStuff['backgroundTopHover'] + " 0%, " + cssStuff['backgroundBottomHover'] + " 100%);";
    cssText             += "     color: " + cssStuff['textColorHover'] + ";";
    cssText             += "} ";
    
    cssText             += ".button:active { ";
	cssText             += "     text-shadow: " + cssStuff['textShadowActive'] + " 0 1px 0;";
    cssText             += "     border: " + cssStuff['borderThickness'] + " solid " + cssStuff['borderColorActive'] + ";";
	 cssText             += "     background: " + cssStuff['backgroundBottomActive'] + ";";
    cssText             += "     background: -webkit-gradient(linear, left top, left bottom, from(" + cssStuff['backgroundTopActive'] + "), to(" + cssStuff['backgroundBottomHover'] + "));";
    cssText             += "     background: -webkit-linear-gradient(top, " + cssStuff['backgroundTopActive'] + ", " + cssStuff['backgroundBottomActive'] + ");";
    cssText             += "     background: -moz-linear-gradient(top, " + cssStuff['backgroundTopActive'] + ", " + cssStuff['backgroundBottomActive'] + ");";
    cssText             += "     background: -ms-linear-gradient(top, " + cssStuff['backgroundTopActive'] + ", " + cssStuff['backgroundBottomActive'] + ");";
    cssText             += "     background: -o-linear-gradient(top, " + cssStuff['backgroundTopActive'] + ", " + cssStuff['backgroundBottomActive'] + ");";
	cssText             += "     background-image: -ms-linear-gradient(top, " + cssStuff['backgroundTopActive'] + " 0%, " + cssStuff['backgroundBottomActive'] + " 100%);";
	cssText             += "     color: " + cssStuff['textColorActive'] + ";";
    cssText             += "} ";


    $("#the-style").replaceWith("<style id='the-style' type='text/css'>" + cssText + "</style>");
    cssText = cssText
        .replace(/;/g,";<br />&nbsp;&nbsp;").replace(/{/g,"{<br />&nbsp;&nbsp;").replace(/}/g,"&nbsp;}<br />");

    $("#the-css").html(cssText);
}

function createHTML() {
    htmlText = "&lt;a href='#' class='button'&gt;" + $('#button-title').val() + "&lt;/a&gt;";

    //$("#the-style").replaceWith("<style id='the-style' type='text/css'>" + htmlText + "</style>");
    $("#the-html").html(htmlText);
}

function reCenterButton() {
    $(".button").position({
    	"my": "center center",
    	"at": "center center",
    	"of": $("#button-box")
    });
};

$(function() {

    $("head").append("<style id='the-style' type='text/css'></style>");

    reCenterButton();
    createCSS();
    createHTML();
    
    $('#sizer').slider({
		values: [21],
		min: 4,
		max: 40,
		slide: function(event, ui) {
		    cssStuff['buttonPadding'] = ui.value/2 + "px " + ui.value + "px";
		    reCenterButton();
		    createCSS();
		}
	});
	
	$('#font-sizer').slider({
		values: [14],
		min: 9,
		max: 24,
		slide: function(event, ui) {
		    cssStuff['fontSize'] = ui.value + "px";
		    reCenterButton();
		    createCSS();
		}
	});
	
	$('#border-rounder').slider({
		values: [6],
		min: 0,
		max: 30,
		slide: function(event, ui) {
		    cssStuff['borderRadius'] = ui.value + "px";
		    createCSS();
		}
	});
	
	$('#border-thickness').slider({
		values: [1],
		min: 0,
		max: 5,
		slide: function(event, ui) {
		    cssStuff['borderThickness'] = ui.value + "px";
		    reCenterButton();
		    createCSS();
		}
	});
	
	$('#inner-highlight').slider({
		values: [1],
		min: 0,
		max: 1,
		slide: function(event, ui) {
		    cssStuff['innerHighlight'] = ui.value + "px";
		    
		    createCSS();
		}
	});
	
	$('#outer-highlight').slider({
		values: [1],
		min: 0,
		max: 1,
		slide: function(event, ui) {
		    cssStuff['outerHighlight'] = ui.value + "px";
		    
		    createCSS();
		}
	});
	
	$('.pickable').ColorPicker({
    	onSubmit: function(hsb, hex, rgb, el) {
    		$(el).val(hex).css("background", "#" + hex);
    		$(el).ColorPickerHide();
    		
    		forValue = $(el).attr("rel");
    		    		
    		cssStuff[forValue] = "#" + hex;
    		createCSS();
    		
    	},
    	onChange: function(hsb, hex, rgb, el) {
    	
    		$($(this).data('colorpicker').el).val(hex).css("background", "#" + hex);
    		
    		forValue = $($(this).data('colorpicker').el).attr("rel");
    		    		
    		cssStuff[forValue] = "#" + hex;
    		createCSS();
    		
    	},
    	onBeforeShow: function () {
    		$(this).ColorPickerSetColor(this.value);
    	}
    });
    $(".get-css-button").click(function() {
        $("#the-css").dialog({
            "title": "Your Button CSS",
            "width": 700,
			"height": 600
			
        });
    });
	$(".get-html-button").click(function() {
        $("#the-html").dialog({
            "title": "Your Button HTML",
            "width": 700
        });
    });
    


});