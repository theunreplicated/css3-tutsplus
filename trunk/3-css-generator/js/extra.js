$(document).ready(function() {
    $('#button-title').keyup(function() {
	$('#button-box a').text($('#button-title').val());
    reCenterButton();
    createHTML();
    })
});

$(document).ready(function() {
    $('#form-title').keyup(function() {
	$('#button-box h2').text($('#form-title').val());
    reCenterButton();
    createHTML();
    })
});

$(document).ready(function() {
    $('#field-title-a').keyup(function() {
	$('#button-box h3').text($('#field-title-a').val());
    reCenterButton();
    createHTML();
    })
});
$(document).ready(function() {
    $('#field-title-b').keyup(function() {
	$('#button-box h4').text($('#field-title-b').val());
    reCenterButton();
    createHTML();
    })
});