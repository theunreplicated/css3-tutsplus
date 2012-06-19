$(document).ready(function() {
    $('#ribbon-title').keyup(function() {
	$('#button-box h1').text($('#ribbon-title').val());
    reCenterButton();
    createHTML();
    })
});