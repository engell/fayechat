
$(function() {
	var client = new Faye.Client('http://localhost:3000/faye');
	client.subscribe('/messages', function(message) {
		$('#messages').append('<li>'+message.text+'</li>');
	});

	$('#publish').click(function(){
		if($('#text').val()){
			client.publish('/messages', {
			  text: $('#text').val()
			});
			$('#text').val('')
		}
	});

});

