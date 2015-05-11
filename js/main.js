$.jsonRPC.setup({
	endPoint: 'https://api.ia.utwente.nl/app/lennart/',
	namespace: ''
});

$(document).ready(function() {

	$("#command-line").submit(function()
	{
		var command = $("input[name='command']").val();

		$.jsonRPC.request('getCompanyStream', {
			params: null,
			success: function(result) {
				console.log(result);
			},
			error: function(result) {
				console.log(result);
			}
		});

		$("#output").append('<p>> '+command+'</p>');

		$("input[name='command']").val("");
		event.preventDefault();
	});
});