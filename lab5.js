$("document").ready(function(){
	$("form[name='registration']").validate({
		rules: {
			name:"required"
		},
		messages: {
			name: "Please enter your name"
		},
		submithandler: function(form) {
			form.submit();
		}
	});
});