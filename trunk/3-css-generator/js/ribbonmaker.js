/*
	 Button Builder
	 by Norm
	 http://uiparade.com	 
	 Props to Chris Coyier @ http://css-tricks.com for the orignal base coding.
*/
var cssText              = '',
    forValue             = '';

var cssStuff = new Array();

cssStuff['backgroundTop']           = "#d64b4b";
cssStuff['backgroundBottom']        = "#ab2c2c";
cssStuff['foldColor']               = "#871616";
cssStuff['endColor']               	= "#c23a3a";
cssStuff['ribbonWidth']         	= "300px";
cssStuff['fontSize']         		= "25px";
cssStuff['textColor']               = "#801111";
cssStuff['textShadow']              = "#d65c5c";
cssStuff['endSize']         		= "20px";
cssStuff['outerShadow']             = "1px";
cssStuff['innerStitching']          = "1px";




    
function createCSS() {    
    cssText              = ".ribbon { ";
	cssText             += "     width: " + cssStuff['ribbonWidth'] + ";";
    cssText             += "     position: absolute;";
	cssText             += "     text-align: center;";
	cssText             += "     font-size: " + cssStuff['endSize'] + "!important;";	
	cssText             += "     background: " + cssStuff['backgroundTop'] + ";";
    cssText             += "     background: -webkit-gradient(linear, left top, left bottom, from(" + cssStuff['backgroundTop'] + "), to(" + cssStuff['backgroundBottom'] + "));";
    cssText             += "     background: -webkit-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
    cssText             += "     background: -moz-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
    cssText             += "     background: -ms-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
    cssText             += "     background: -o-linear-gradient(top, " + cssStuff['backgroundTop'] + ", " + cssStuff['backgroundBottom'] + ");";
	cssText             += "     background-image: -ms-linear-gradient(top, " + cssStuff['backgroundTop'] + " 0%, " + cssStuff['backgroundBottom'] + " 100%);";
	cssText             += "     -webkit-box-shadow: rgba(000,000,000,0.3) 0 " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + ";";
    cssText             += "     -moz-box-shadow: rgba(000,000,000,0.3) 0 " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + ";" ;
    cssText             += "     box-shadow: rgba(000,000,000,0.3) 0 " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + ";";
	cssText             += "     font-family: 'Helvetica Neue',Helvetica, sans-serif;";
    cssText             += "} ";
	
	cssText             += ".ribbon h1 { ";
	cssText             += "     font-size: " + cssStuff['fontSize'] + "!important;";
	cssText             += "     color: " + cssStuff['textColor'] + ";";   
	cssText             += "     text-shadow: " + cssStuff['textShadow'] + " 0 1px 0;";
	cssText             += "     margin:0px;";
	cssText             += "     padding: 15px 10px;";
    cssText             += "} ";
	
	cssText             += ".ribbon:before, .ribbon:after { ";
	cssText             += "     content: '';";
	cssText             += "     position: absolute;";
	cssText             += "     display: block;";   
	cssText             += "     bottom: -1em;";
	cssText             += "     border: 1.5em solid " + cssStuff['endColor'] + ";";
	cssText             += "     z-index: -1;";
    cssText             += "} ";
	
	
	cssText             += ".ribbon:before { ";
	cssText             += "     left: -2em;";
	cssText             += "     border-right-width: 1.5em;";   
	cssText             += "     border-left-color: transparent;";
	cssText             += "     -webkit-box-shadow: rgba(000,000,000,0.4) " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + ";";
    cssText             += "     -moz-box-shadow: rgba(000,000,000,0.4) " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + ";" ;
    cssText             += "     box-shadow: rgba(000,000,000,0.4) " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + ";";
    cssText             += "} ";
	
	cssText             += ".ribbon:after { ";
	cssText             += "     right: -2em;";
	cssText             += "     border-left-width: 1.5em;";   
	cssText             += "     border-right-color: transparent;";
	cssText             += "     -webkit-box-shadow: rgba(000,000,000,0.4) -" + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + ";";
    cssText             += "     -moz-box-shadow: rgba(000,000,000,0.4) -" + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + ";" ;
    cssText             += "     box-shadow: rgba(000,000,000,0.4) -" + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + " " + cssStuff['outerShadow'] + ";";
    cssText             += "} ";
	
	
	cssText             += ".ribbon .ribbon-content:before, .ribbon .ribbon-content:after { ";
	cssText             += "     border-color: " + cssStuff['foldColor'] + " transparent transparent transparent;";
	cssText             += "     position: absolute;";
	cssText             += "     display: block;";   
	cssText             += "     border-style: solid;";
	cssText             += "     bottom: -1em;";
	cssText             += "     content: '';";
    cssText             += "} ";
	
	cssText             += ".ribbon .ribbon-content:before { ";
	cssText             += "     left: 0;";
	cssText             += "     border-width: 1em 0 0 1em;";   
    cssText             += "} ";
	
	cssText             += ".ribbon .ribbon-content:after { ";
	cssText             += "     right: 0;";
	cssText             += "     border-width: 1em 1em 0 0;";   
    cssText             += "} ";
	
	cssText             += ".ribbon-stitches-top { ";
	cssText             += "     margin-top:2px;";
	cssText             += "     border-top: " + cssStuff['innerStitching'] + " dashed rgba(0, 0, 0, 0.2);";
	cssText             += "     -moz-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);";   
	cssText             += "     -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);";
	cssText             += "     box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.5);";
    cssText             += "} ";
	
	cssText             += ".ribbon-stitches-bottom { ";
	cssText             += "     margin-bottom:2px;";
	cssText             += "     border-top: " + cssStuff['innerStitching'] + " dashed rgba(0, 0, 0, 0.2);";
	cssText             += "     -moz-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);";   
	cssText             += "     -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);";
	cssText             += "     box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.3);";
    cssText             += "} ";

	
	
    $("#the-style").replaceWith("<style id='the-style' type='text/css'>" + cssText + "</style>");
    cssText = cssText
        .replace(/;/g,";<br />&nbsp;&nbsp;").replace(/{/g,"{<br />&nbsp;&nbsp;").replace(/}/g,"&nbsp;}<br />");

    $("#the-css").html(cssText);
}

function createHTML() {
    htmlText = "&lt;div class=&quot;ribbon&quot;&gt;&lt;div class=&quot;ribbon-stitches-top&quot;&gt;&lt;/div&gt;&lt;strong class=&quot;ribbon-content&quot;&gt;&lt;h1&gt;" + $('#ribbon-title').val() + "&lt;/h1&gt;&lt;/strong&gt;&lt;div class=&quot;ribbon-stitches-bottom&quot;&gt;&lt;/div&gt;&lt;/div&gt;";

    //$("#the-style").replaceWith("<style id='the-style' type='text/css'>" + htmlText + "</style>");
    $("#the-html").html(htmlText);
}

function reCenterButton() {
    $(".ribbon").position({
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
    
    $('#ribbon-sizer').slider({
		values: [300],
		min: 100,
		max: 600,
		slide: function(event, ui) {
		    cssStuff['ribbonWidth'] =  ui.value + "px";
		    reCenterButton();
		    createCSS();
		}
	});
	
	$('#font-sizer').slider({
		values: [25],
		min: 9,
		max: 49,
		slide: function(event, ui) {
		    cssStuff['fontSize'] = ui.value + "px";
		    reCenterButton();
		    createCSS();
		}
	});
	
	$('#end-sizer').slider({
		values: [20],
		min: 2,
		max: 32,
		slide: function(event, ui) {
		    cssStuff['endSize'] = ui.value + "px";
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
	
	$('#inner-stitching').slider({
		values: [1],
		min: 0,
		max: 1,
		slide: function(event, ui) {
		    cssStuff['innerStitching'] = ui.value + "px";
		    
		    createCSS();
		}
	});
	
	$('#outer-shadow').slider({
		values: [1],
		min: 0,
		max: 1,
		slide: function(event, ui) {
		    cssStuff['outerShadow'] = ui.value + "px";
		    
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
            "title": "Your Ribbon CSS",
            "width": 700,
			"height": 600
			
        });
    });
	$(".get-html-button").click(function() {
        $("#the-html").dialog({
            "title": "Your Ribbon HTML",
            "width": 700
        });
    });
    


});