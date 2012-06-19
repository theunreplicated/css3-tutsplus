/*
	 Button Builder
	 by Norm
	 http://uiparade.com	 
	 Props to Chris Coyier @ http://css-tricks.com for the orignal base coding.
*/
var cssText              = '',
    forValue             = '';

var cssStuff = new Array();

cssStuff['backgroundTop']           = "#8dc059";
cssStuff['backgroundBottom']        = "#6aa436";
cssStuff['backgroundTopHover']      = "#8dc059";
cssStuff['backgroundBottomHover']   = "#6aa436";
cssStuff['backgroundTopActive']     = "#6aa436";
cssStuff['backgroundBottomActive']  = "#8dc059";
cssStuff['borderThickness']         = "1px";
cssStuff['borderColor']             = "#447314";
cssStuff['borderColorHover']        = "#447314";
cssStuff['borderColorActive']       = "#447314";
cssStuff['borderRadius']            = "4px";
cssStuff['textColor']               = "#31540c";
cssStuff['textColorHover']          = "#fff";
cssStuff['textColorActive']         = "#fff";
cssStuff['textShadow']              = "#addc7e";
cssStuff['textShadowHover']         = "#31540c";
cssStuff['textShadowActive']        = "#31540c";
cssStuff['fontSize']                = "14px";
cssStuff['fontStack']               = "helvetica, serif";
cssStuff['innerHighlight']          = "1px";
cssStuff['outerHighlight']          = "1px";





cssStuff['fieldBorderThickness']    = "1px";
cssStuff['fieldBorderColor']        = "#c9b7a2";
cssStuff['fieldBorderRadius']       = "4px";
cssStuff['fieldTextColor']          = "#c9b7a2";
cssStuff['selecetedFieldTextColor'] = "#725129";
cssStuff['fieldBackground']   	    = "#e4d5c3";
cssStuff['fieldSelectedBackground'] = "#fff";
cssStuff['fieldOuterHighlight']     = "1px";
cssStuff['fieldShadow']             = "0px";

cssStuff['formTextColor']           = "#725129";
cssStuff['formTextShadow']          = "#fdf2e4";
cssStuff['formTopGradientValue']    = "#f2e3d2";
cssStuff['formBottomGradientValue'] = "#c9b7a2";
cssStuff['formBorderColor']         = "#f2e3d2";
cssStuff['formBorderRadius']        = "8px";
cssStuff['formBorderThickness']     = "1px";
cssStuff['formInnerHighlight']      = "0px";
cssStuff['formShadow']              = "1px";






    
function createCSS() {  
	cssText              = ".form-container { ";
	cssText             += "     border: " + cssStuff['formBorderThickness'] + " solid " + cssStuff['formBorderColor'] + ";";
	cssText             += "     background: " + cssStuff['formBottomGradientValue'] + ";";
    cssText             += "     background: -webkit-gradient(linear, left top, left bottom, from(" + cssStuff['formTopGradientValue'] + "), to(" + cssStuff['formBottomGradientValue'] + "));";
    cssText             += "     background: -webkit-linear-gradient(top, " + cssStuff['formTopGradientValue'] + ", " + cssStuff['formBottomGradientValue'] + ");";
    cssText             += "     background: -moz-linear-gradient(top, " + cssStuff['formTopGradientValue'] + ", " + cssStuff['formBottomGradientValue'] + ");";
    cssText             += "     background: -ms-linear-gradient(top, " + cssStuff['formTopGradientValue'] + ", " + cssStuff['formBottomGradientValue'] + ");";
    cssText             += "     background: -o-linear-gradient(top, " + cssStuff['formTopGradientValue'] + ", " + cssStuff['formBottomGradientValue'] + ");";
	cssText             += "     background-image: -ms-linear-gradient(top, " + cssStuff['formTopGradientValue'] + " 0%, " + cssStuff['formBottomGradientValue'] + " 100%);";
	
	cssText             += "     -webkit-border-radius: " + cssStuff['formBorderRadius'] + ";";
    cssText             += "     -moz-border-radius: " + cssStuff['formBorderRadius'] + ";";
    cssText             += "     border-radius: " + cssStuff['formBorderRadius'] + ";";
	
	cssText             += "     -webkit-box-shadow: rgba(000,000,000,0.9) 0 " + cssStuff['formShadow'] + " 2px, inset rgba(255,255,255,0.4) 0 " + cssStuff['formInnerHighlight'] + " 0;";
    cssText             += "     -moz-box-shadow: rgba(000,000,000,0.9) 0 " + cssStuff['formShadow'] + " 2px, inset rgba(255,255,255,0.4) 0 " + cssStuff['formInnerHighlight'] + " 0;" ;
    cssText             += "     box-shadow: rgba(000,000,000,0.9) 0 " + cssStuff['formShadow'] + " 2px, inset rgba(255,255,255,0.4) 0 " + cssStuff['formInnerHighlight'] + " 0;";
    
    cssText             += "     font-family: 'Helvetica Neue',Helvetica,sans-serif;";
    cssText             += "     text-decoration: none;";
    cssText             += "     vertical-align: middle;";
	cssText             += "     min-width:300px;";
	cssText             += "     padding:20px;";
	cssText             += "     width:300px;";	
    cssText             += "} ";
	
	cssText             += ".form-field { ";
    cssText             += "     border: " + cssStuff['fieldBorderThickness'] + " solid " + cssStuff['fieldBorderColor'] + ";";
	cssText             += "     background: " + cssStuff['fieldBackground'] + ";";
	cssText             += "     -webkit-border-radius: " + cssStuff['fieldBorderRadius'] + ";";
    cssText             += "     -moz-border-radius: " + cssStuff['fieldBorderRadius'] + ";";
    cssText             += "     border-radius: " + cssStuff['fieldBorderRadius'] + ";";
	cssText             += "     color: " + cssStuff['fieldTextColor'] + ";";
	cssText             += "     -webkit-box-shadow: rgba(255,255,255,0.4) 0 " + cssStuff['fieldOuterHighlight'] + " 0, inset rgba(000,000,000,0.7) 0 " + cssStuff['fieldShadow'] + " " + cssStuff['fieldShadow'] + ";";
    cssText             += "     -moz-box-shadow: rgba(255,255,255,0.4) 0 " + cssStuff['fieldOuterHighlight'] + " 0, inset rgba(000,000,000,0.7) 0 " + cssStuff['fieldShadow'] + " " + cssStuff['fieldShadow'] + ";" ;
    cssText             += "     box-shadow: rgba(255,255,255,0.4) 0 " + cssStuff['fieldOuterHighlight'] + " 0, inset rgba(000,000,000,0.7) 0 " + cssStuff['fieldShadow'] + " " + cssStuff['fieldShadow'] + ";";
	cssText             += "     padding:8px;";
	cssText             += "     margin-bottom:20px;";
	cssText             += "     width:280px;";
	cssText             += "} ";
	
	cssText             += ".form-field:focus { ";
	cssText             += "     background: " + cssStuff['fieldSelectedBackground'] + ";";
	cssText             += "     color: " + cssStuff['selecetedFieldTextColor'] + ";";
    cssText             += "} ";
	
	cssText             += ".form-container h2 { ";
	cssText             += "     text-shadow: " + cssStuff['formTextShadow'] + " 0 1px 0;";
	cssText             += "     font-size:18px;";
	cssText             += "     margin: 0 0 10px 0; ";
	cssText             += "     font-weight:bold;";
	cssText             += "     text-align:center; ";
	cssText             += "} ";
	
	cssText             += ".form-title { ";
	cssText             += "     margin-bottom:10px;";
	cssText             += "     color: " + cssStuff['formTextColor'] + ";";
    cssText             += "     text-shadow: " + cssStuff['formTextShadow'] + " 0 1px 0;";
    cssText             += "} ";
	
	cssText             += ".submit-container { ";
	cssText             += "     margin:8px 0;";
	cssText             += "     text-align:right;";
    cssText             += "} ";
	
    cssText             += ".submit-button { ";
    cssText             += "     border: " + cssStuff['borderThickness'] + " solid " + cssStuff['borderColor'] + ";";   
    cssText             += "     background: " + cssStuff['backgroundBottom'] + ";";
    cssText             += "     background: -webkit-gradient(linear, left top, left bottom, from(" + cssStuff['backgroundTop'] + "), to(" + cssStuff['backgroundBottom'] + "));";
    cssText             += "     background: -webkit-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
    cssText             += "     background: -moz-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
    cssText             += "     background: -ms-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
    cssText             += "     background: -o-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
	cssText             += "     background-image: -ms-linear-gradient(top, " + cssStuff['backgroundTop'] + " 0%, " + cssStuff['backgroundBottom'] + " 100%);";
    
    
    cssText             += "     -webkit-border-radius: " + cssStuff['borderRadius'] + ";";
    cssText             += "     -moz-border-radius: " + cssStuff['borderRadius'] + ";";
    cssText             += "     border-radius: " + cssStuff['borderRadius'] + ";";
    
    cssText             += "     -webkit-box-shadow: rgba(255,255,255,0.4) 0 " + cssStuff['outerHighlight'] + " 0, inset rgba(255,255,255,0.4) 0 " + cssStuff['innerHighlight'] + " 0;";
    cssText             += "     -moz-box-shadow: rgba(255,255,255,0.4) 0 " + cssStuff['outerHighlight'] + " 0, inset rgba(255,255,255,0.4) 0 " + cssStuff['innerHighlight'] + " 0;" ;
    cssText             += "     box-shadow: rgba(255,255,255,0.4) 0 " + cssStuff['outerHighlight'] + " 0, inset rgba(255,255,255,0.4) 0 " + cssStuff['innerHighlight'] + " 0;";
    
    cssText             += "     text-shadow: " + cssStuff['textShadow'] + " 0 1px 0;";  
    cssText             += "     color: " + cssStuff['textColor'] + ";";
    cssText             += "     font-family: " + cssStuff['fontStack'] + ";";
	
	cssText             += "     padding: 8.5px 18px;";
	cssText             += "     font-size: 14px;";
    cssText             += "     text-decoration: none;";
    cssText             += "     vertical-align: middle;";
    cssText             += "} ";
    
    cssText             += ".submit-button:hover { ";
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
    
    cssText             += ".submit-button:active { ";
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
    htmlText  =  "	&lt;form class=&quot;form-container&quot;&gt;<br />"
    htmlText += "	&lt;div class=&quot;form-title&quot;&gt;&lt;h2&gt;" + $('#form-title').val() + "&lt;/h2&gt;&lt;/div&gt;<br />"
    htmlText += "	&lt;div class=&quot;form-title&quot;&gt;" + $('#field-title-a').val() + "&lt;/div&gt;<br />"
	htmlText +=	"	&lt;input class=&quot;form-field&quot; type=&quot;text&quot; name=&quot;firstname&quot; /&gt;&lt;br /&gt;<br />"
    htmlText += "	&lt;div class=&quot;form-title&quot;&gt;" + $('#field-title-b').val() + "&lt;/div&gt;<br />"
	htmlText += "	&lt;input class=&quot;form-field&quot; type=&quot;text&quot; name=&quot;email&quot; /&gt;&lt;br /&gt;<br />"
    htmlText += "	&lt;div class=&quot;submit-container&quot;&gt;<br />"
	htmlText += "	&lt;input class=&quot;submit-button&quot; type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;<br />"
    htmlText += "	&lt;/div&gt;<br />"
	htmlText += "	&lt;/form&gt;";

    //$("#the-style").replaceWith("<style id='the-style' type='text/css'>" + htmlText + "</style>");
    $("#the-html").html(htmlText);
}

function reCenterButton() {
    $(".form-container").position({
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
	
	$('#border-rounder').slider({
		values: [4],
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
	
	$('#form-border-rounder').slider({
		values: [8],
		min: 0,
		max: 30,
		slide: function(event, ui) {
		    cssStuff['formBorderRadius'] = ui.value + "px";
		    createCSS();
		}
	});
	
	$('#field-border-rounder').slider({
		values: [4],
		min: 0,
		max: 15,
		slide: function(event, ui) {
		    cssStuff['fieldBorderRadius'] = ui.value + "px";
		    createCSS();
		}
	});
	
	$('#form-border-thickness').slider({
		values: [1],
		min: 0,
		max: 5,
		slide: function(event, ui) {
		    cssStuff['formBorderThickness'] = ui.value + "px";
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
	$('#form-inner-highlight').slider({
		values: [0],
		min: 0,
		max: 1,
		slide: function(event, ui) {
		    cssStuff['formInnerHighlight'] = ui.value + "px";
		    
		    createCSS();
		}
	});
	
	$('#form-shadow').slider({
		values: [1],
		min: 0,
		max: 1,
		slide: function(event, ui) {
		    cssStuff['formShadow'] = ui.value + "px";
		    
		    createCSS();
		}
	});
	$('#field-outer-highlight').slider({
		values: [1],
		min: 0,
		max: 1,
		slide: function(event, ui) {
		    cssStuff['fieldOuterHighlight'] = ui.value + "px";
		    
		    createCSS();
		}
	});
	$('#field-shadow').slider({
		values: [0],
		min: 0,
		max: 1,
		slide: function(event, ui) {
		    cssStuff['fieldShadow'] = ui.value + "px";
		    
		    createCSS();
		}
	});
	
	
	$('#field-border-thickness').slider({
		values: [1],
		min: 0,
		max: 5,
		slide: function(event, ui) {
		    cssStuff['fieldBorderThickness'] = ui.value + "px";
		    
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
    
    $("#fontSelector").change(function() {
    
        cssStuff['fontStack'] = $(this).val();
        createCSS();
    
    });
	 $(".get-html-button").click(function() {
        $("#the-html").dialog({
            "title": "Your Form HTML",
            "width": 700
        });
    });
    
    $(".get-css-button").click(function() {
        $("#the-css").dialog({
            "title": "Your Form CSS",
            "width": 700,
			"height": 600
			
        });
    });
    


});