
$(function() {
	var client = new Faye.Client('http://localhost:3000/faye');
	client.subscribe('/messages', function(message) {
		$('#messages').append('<li>'+message.text+'</li>');
	});

	$('#publish').click(function(){
		if($('#text').val()){
		contend = ("<b>" + $('#user').val() + "</b>: " + $('#text').val());
			client.publish('/messages', {
			  text: contend
			});
			$('#text').val('')
		}
	});

});

