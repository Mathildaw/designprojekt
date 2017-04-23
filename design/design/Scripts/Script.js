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

function hideshown() {
    var a = document.getElementById('hund')
    var b = document.getElementById('katt')
    var c = document.getElementById('lghnr')
    var x = document.getElementById('flikbtn2')
    var y = document.getElementById('foretag1')
    var z = document.getElementById('flikbtn1')
    
    y.style.display = 'block';
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';

    x.style.backgroundColor = '#f5f5f5';
        z.style.backgroundColor = 'white';
}
function hideshown2() {
    var a = document.getElementById('hund')
    var b = document.getElementById('katt')
    var c = document.getElementById('lghnr')
    var x = document.getElementById('flikbtn1')
    var y = document.getElementById('foretag1')
    var z = document.getElementById('flikbtn2')
   

    a.style.display = 'block';
    b.style.display = 'block';
    c.style.display = 'block';
    y.style.display = 'none';
    x.style.backgroundColor = '#f5f5f5';
    z.style.backgroundColor = 'white';

}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
$(document).ready(function () {
    window.scrollTo(0, 400);
});
