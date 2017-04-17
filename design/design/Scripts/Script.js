$(document).ready(function () {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Skriv ditt namn'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Ange en giltig epostadress'
                    },
                    emailAddress: {
                        message: 'Ange en giltig epostadress'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Ange ditt telefonnummer'
                    },
                    
                }
            },
            address: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Ange din adress'
                    }
                }
            },
            city: {
                validators: {
                    stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Ange ditt postnr'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Ange din postort'
                    }
                }
            },
           
            comment: {
                validators: {
                    stringLength: {
                        min: 5,
                        max: 200,
                        message: 'Ditt meddelande måste vara minst fem tecken.'
                    },
                    notEmpty: {
                        message: 'Skriv ditt meddelande'
                    }
                }
            }
        }
    })
        .on('success.form.bv', function (e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });

    $(document).ready(function () {
        $(".dropdown-toggle").dropdown();
    });
});
$(document).on('click', 'ul.drop', function (e) {
    e.stopPropagation();
});
function hideshow() {
    var x = document.getElementById('medsökandediv');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

