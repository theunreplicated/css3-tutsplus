/*
	todo:
		allow different colour formats e.g. rgb, hex, hsl
		colour pickers for demo background and text colour
		browser detection
		allow up/down keypresses
*/

var activeControl       = false,
	offset              = 90,
	max_shadow_distance = 150,
	max_shadow_blur     = 30,
	shadow_angle        = 45,
	shadow_distance     = 10,
	shadow_blur         = 5,
	shadow_colour_r     = 50,
	shadow_colour_g     = 50,
	shadow_colour_b     = 50,
	shadow_opacity      = 0.75;

function updateAllParameters()
{
	shadow_angle    = limit360(prepFloat($("#angle").val()));
	shadow_distance = limitToRange( prepFloat($("#distance").val()), -(max_shadow_distance/2), (max_shadow_distance/2) );
	shadow_blur     = limitToRange( prepFloat($("#blur").val()), 0, max_shadow_blur);
	shadow_opacity  = limitToRange( prepFloat($("#opacity").val()), 0, 1);
	shadow_colour_r = prepFloat( getColourFromCSSRule( $("#colour").val(), 'r' ) );
	shadow_colour_g = prepFloat( getColourFromCSSRule( $("#colour").val(), 'g' ) );
	shadow_colour_b = prepFloat( getColourFromCSSRule( $("#colour").val(), 'b' ) );
	updateBoxShadow();
}

function updateBoxShadow()
{
	$( "#angle"    ).val(Math.round(shadow_angle));
	$( "#distance" ).val(Math.round(shadow_distance));
	$( "#blur"     ).val(Math.round(shadow_blur));
	$( "#colour"   ).val(Math.round(shadow_colour_r)+','+Math.round(shadow_colour_g)+','+Math.round(shadow_colour_b));
	$( "#opacity"  ).val(Math.round(shadow_opacity*100)/100);

	setKnobAngle('angle_slider', shadow_angle + offset);
	updateSliderPosition('distance_sider_button', 100*((shadow_distance/max_shadow_distance)+0.5) );
	updateSliderPosition('blur_sider_button', 100*(shadow_blur/max_shadow_blur) );
	updateSliderPosition('opacity_sider_button', 100*shadow_opacity );
	updateSliderPosition('r_sider_button', 100*(shadow_colour_r/255) );
	updateSliderPosition('g_sider_button', 100*(shadow_colour_g/255) );
	updateSliderPosition('b_sider_button', 100*(shadow_colour_b/255) );

	box_shadow_value = calculateBoxShadow(shadow_angle, shadow_distance, shadow_blur, shadow_colour_r, shadow_colour_g, shadow_colour_b, shadow_opacity);
	$("#box_shadow").css("MozBoxShadow", box_shadow_value );
	$("#box_shadow").css("webkitBoxShadow", box_shadow_value );
	$("#box_shadow").css("boxShadow", box_shadow_value );
	$("#output").val("-webkit-box-shadow: "+ box_shadow_value +";\n-moz-box-shadow:    "+ box_shadow_value +";\nbox-shadow:         "+ box_shadow_value +";"
	);
}

function calculateBoxShadow(angle, distance, blur, r, g, b, opacity, inset)
{
	inset   = (inset == 1) ? 'inset ' : '' ;
	angle   = angle*((Math.PI)/180);
	x       = Math.round(distance * Math.cos(angle));
	y       = Math.round(distance * Math.sin(angle));
	blur    = Math.round(blur);
	opacity = Math.round(opacity*100)/100; // 2dp
	colour  = 'rgba('+Math.round(r)+', '+Math.round(g)+', '+Math.round(b)+', '+opacity+')';
	return inset + x +'px '+ y +'px '+ blur +'px '+ colour;
}


function updateAngle(id, angle)
{
	if(activeControl !== false && $('#'+id).hasClass('knob_control')){

		switch (id){
			case 'angle_slider':
				shadow_angle = limit360(angle);
				break;
		}
		updateBoxShadow();
	}
}


function setKnobAngle(id, angle)
{
	$('#'+id).css('webkitTransform', "rotate(" + angle + "deg)");
    $('#'+id).css('MozTransform', "rotate(" + angle  + "deg)");
    $('#'+id).css('OTransform', "rotate(" + angle  + "deg)");
}

function updateParam(id, percentage)
{
	switch (id){
		case 'distance_sider_button':
			shadow_distance = max_shadow_distance*((percentage/100)-0.5);
			break;
		case 'blur_sider_button':
			shadow_blur = max_shadow_blur*(percentage/100);
			break;
		case 'opacity_sider_button':
			shadow_opacity = percentage/100;
			break;
		case 'r_sider_button':
			shadow_colour_r = 255*(percentage/100);
			break;
		case 'g_sider_button':
			shadow_colour_g = 255*(percentage/100);
			break;
		case 'b_sider_button':
			shadow_colour_b = 255*(percentage/100);
			break;
	}

	updateBoxShadow();
}


function limit360(angle)
{
	while (angle >= 360){
		angle = angle - 360;
	}
	while (angle < 0){
		angle = angle + 360;
	}
	return angle;
}

function limitToRange(number, min, max)
{
	if (max < min){
		return false;
	}
	if (number > max){
		number = max;
	}
	else if (number < min){
		number = min;
	}
	return number;
}



function toggleTextSelection(select)
{
	if (select == 0){
		val = 'none';
	}
	else{
		val = '';
	}
	$("body").css('MozUserSelect', val);
	$("body").css('webkitUserSelect', val);
}


function updateSliderPosition(id, percentage){
		this_button = $("#"+id);
    	buttonWidth = this_button.width();
		containerWidth = this_button.parent().width();
        x = (containerWidth - buttonWidth)*(percentage/100);
		this_button.css('marginLeft', x+'px');
}

function calculateSliderPercentage(e){
	if(activeControl !== false){

    	this_button = $("#"+activeControl);
    	buttonWidth = this_button.width();

		containerPos = this_button.parent().position();
		containerLeft = containerPos.left;
		containerWidth = this_button.parent().width();
		containerRight = containerLeft + containerWidth;

		if (e.pageX > (containerRight - (buttonWidth/2))){
			x = containerRight - buttonWidth;
		}
		else if (e.pageX < (containerLeft + (buttonWidth/2))){
			x = containerLeft;
		}
		else{
			x = e.pageX - (buttonWidth/2);
		}

		x = x-containerLeft;

        percentage = 100*(x/(containerWidth - (buttonWidth)));
        return percentage;
    }
}


function prepFloat(num){
	num = parseFloat(num);
	if (isNaN(num)){
		num = 0;
	}
	return num;
}

function getColourFromCSSRule(rule, colour)
{
	rule = rule.replace(/[a-zA-Z]+/g, '');
	rgb = rule.substr(0, rule.length);
	rgb_array = rgb.split(',');
	for (i=0; i<rgb_array.length; i++){
		rgb_array[i] = $.trim(rgb_array[i]);
	}
	colours = ['r', 'g', 'b'];
	index = colours.indexOf(colour);
	num = rgb_array[index];
	num = parseFloat(num);
	return ( isNaN(num) || num < 0 || num > 255) ? 0 : num ;
}


(function($){

	// update when inputs lose focus
	$('.auto_update').change(function() {
		updateAllParameters();
	});

	// angle control
	$('.knob_control').mousedown(function(e){
       activeControl = $(this).attr('id');
       toggleTextSelection(0);
	});

	$('body').mousemove(function(e){
    	if(activeControl !== false && $('#'+activeControl).hasClass('knob_control')){

			pos = $('#'+activeControl).position();
    		centrePos = [pos.left + (($('#'+activeControl).width())/2), pos.top + (($('#'+activeControl).height())/2)];

    		distX = e.pageX - centrePos[0];
    		distY = e.pageY - centrePos[1];

    		angle = Math.atan2(distY, distX);
			angle = angle*(180/(Math.PI));

           	updateAngle(activeControl, angle);
       	}
	});

	// slider behaviour
	$('.slider_button').mousedown(function(e){
		e.preventDefault();
    	activeControl = $(this).attr('id');
    	toggleTextSelection(0);
	});

	$('body').mouseup(function(){
		activeControl = false;
		toggleTextSelection(1);
	}).mousemove(function(e){
		if(activeControl !== false){
    		pc = calculateSliderPercentage(e);
    		updateParam(activeControl, pc);
		}
	});

	$('.slider_container').mousedown(function(e){
			e.preventDefault()
    		activeControl = $(this).children().attr('id');
    		toggleTextSelection(0);
    		pc = calculateSliderPercentage(e);
    		updateParam(activeControl, pc);
	});

	// set initial settings
	updateBoxShadow();


})(this.jQuery);
