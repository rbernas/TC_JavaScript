$(document).ready(function() {
	$("#register-form").validate({
                rules: {
                    name: {
                    		required: true,
                    		minlength: 1
                    },
                    phoneNumber: {
                        required: true,
                        phoneUS: true
                }},
                messages: {
                    name: "Full name is a required field",
                    phoneNumber: "Please enter a valid phone number"
                },

								submitHandler: function(form) {
                    form.submit();
                }
              })
            });