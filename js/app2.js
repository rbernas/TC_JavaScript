(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#register-form").validate({
                rules: {
                    name: "required",
                    phoneNumber: {
                        required: true,
                        phoneUS: true
                },

                messages: {
                    name: "Please enter your name",
                    phoneNumber: "Please enter phone number"
                },

                submitHandler: function(form) {
                    form.submit();
                }
              }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);