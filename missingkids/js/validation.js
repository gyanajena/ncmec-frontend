$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});
$.validator.addMethod("regex", function (value, element, regexpr) {
    return regexpr.test(value);
}, "Please enter a valid value");

$(document).ready(function () {
    // validate the comment form when it is submitted
    //   $("#js-interview-form").validate();

    // validate signup form on keyup and submit

    // Interview Form Starts Here

    $("#js-interview-form").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname"
        }
    });

    // Online Application Form 1 Starts Here

    $("#js-ncmec-univ-form").validate({
        rules: {
            prefix: "required",
            fname: "required",
            lname: "required",
            agency_dept: "required",
            address: "required",
            city: "required",
            state: "required",
            zip: "required",
            phoneNumber: {
                phoneUS: true,
                required: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            },
            additional_info: "required"
        },
        messages: {
            prefix: "This field is required",
            fname: "This field is required",
            lname: "This field is required",
            agency_dept: "This field is required",
            address: "This field is required",
            city: "This field is required",
            state: "This field is required",
            additional_info: "This field is required"
        }
    });

    // Online Application Form 2 Starts Here

    $("#js-ce-application").validate({
        rules: {
            prefix_1: "required",
            fname_1: "required",
            lname_1: "required",
            first_choice_1: "required",
            second_choice_1: "required",
            agency_dept_1: "required",
            address_1: "required",
            city_1: "required",
            state_1: "required",
            zip_1: "required",
            phoneNumber: {
                phoneUS: true,
                required: true,
                minlength: 10,
                maxlength: 10
            },
            email_1: {
                required: true,
                email: true
            },
            child_policy_1: "required",
            jurix_population: "required",
            sworn_officers: "required"
        },
        messages: {
            prefix_1: "This field is required",
            fname_1: "This field is required",
            lname_1: "This field is required",
            first_choice_1: "This field is required",
            second_choice_1: "This field is required",
            agency_dept_1: "This field is required",
            address_1: "This field is required",
            city_1: "This field is required",
            state_1: "This field is required",
            child_policy_1: "This field is required",
            jurix_population: "This field is required",
            sworn_officers: "This field is required"
        }
    });

    /* ===== ICAAN Form Starts Here ===== */

    $("#js-icaan-form").validate({
        rules: {
            name: "required",
            firm: "required",
            address: "required",
            city: "required",
            state: "required",
            zip: "required",
            phoneNumber: {
                phoneUS: true,
                required: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            },
            country_of_interest: "required",
            federal_courts: "required",
            language: "required"
        },
        messages: {
            name: "This field is required",
            firm: "This field is required",
            address: "This field is required",
            city: "This field is required",
            state: "This field is required",
            country_of_interest: "This field is required",
            federal_courts: "This field is required",
            language: "This field is required"
        }
    });

    /* ===== Donor Privacy Form Starts Here ===== */

    $("#js-donor-privacy").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            your_request: "required"
        },
        messages: {
            name: "This field is required",
            your_request: "This field is required"
        }
    });

    /* ===== Contact Us Form Starts Here ===== */

    $("#js-contact-us").validate({
        rules: {
            contact_name: "required",
            contact_email: {
                required: true,
                email: true
            },
            comments: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            contact_name: "This field is required",
            comments: "This field is required"
        }
    });

    /* ===== Enews Form Starts Here ===== */

    $("#js-enews").validate({
        rules: {
            contact_email: {
                required: true,
                email: true
            }
        },
        messages: {

        }
    });

    /* ===== Media Connect Form Starts Here ===== */

    $("#js-media-connect").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            fullname: "required",
            city: "required",
            state: "required"
        },
        messages: {
            fullname: "This field is required",
            city: "This field is required",
            state: "This field is required"
        }
    });



// Validation for CodeAdam page starts here

    $("#js-codeadam-form").validate({
        rules: {
            fname: "required",
            lname: "required",
            organisationType: "required",
            city: "required",
            state: "required",
            zip: "required",
            mailingAddress: "required",
            locations: "required",
            englishKits: "required",
            spanishKits: "required",
            phoneNumber: {
                // phoneUS: true,
                required: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            fname: "This field is required",
            lname: "This field is required",
            city: "This field is required",
            state: "This field is required",
            organisationType: "This field is required",
            zip: "This field is required",
            mailingAddress: "This field is required",
            locations: "This field is required",
            englishKits: "This field is required",
            spanishKits: "This field is required",
            phoneNumber: "Please Enter a valid phone number",
            email: "Please Enter a valid email address"
        }

    });
// Validation for disaster-response-vedio page starts here

    $("#js-disaster-response-vedio").validate({
        rules: {
            fname: "required",
            lname: "required",
            city: "required",
            state: "required",
            zip: "required",
            mailingAddress: "required",
            locations: "required",
            phoneNumber: {
                phoneUS: true,
                required: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            fname: "This field is required",
            lname: "This field is required",
            city: "This field is required",
            state: "This field is required",
            zip: "This field is required",
            mailingAddress: "This field is required",
            phoneNumber: "Please Enter a valid phone number",
            email: "Please Enter a valid email address"
        }
    });

    $("#fundraiser-form").validate({
        rules: {
            "sponsor-name": "required",
            "contact-name": "required",
            "telephone": "required",
            "email": "required",
            "address": "required",
            "city": "required",
            "state": "required",
            "zip": "required",
            "event-location": "required",
            "proposed-date": "required",
            "desc-fundraiser": "required",
            "fund-to-be-donated-to": "required",
            "ancticipated-income": "required",
            "ancticipated-income-raised": "required",
            "fund-donation":"required"

        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "fund-donation") {
                error.css('display', 'block').insertAfter($("#no-fund-donation").siblings('label') );
            } else {
                error.insertAfter(element);
            }
        }

    });

    $("#js-reprint-request-form").validate({
        rules: {
            requestor_name: "required",
            org_type: "required",
            address_1: "required",
            city: "required",
            state: "required",
            zip: "required",
            phone: {
                required: true,
                regex: /^(1-)?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
            },
            email: {
                required: true,
                regex: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
            },
            publication_title: "required"
        },
        messages: {
            requestor_name: "This field is required",
            org_type: "This field is required",
            address_1: "This field is required",
            city: "This field is required",
            state: "This field is required",
            zip: "This field is required",
            phone: "Please Enter a valid phone number",
            email: "Please Enter a valid email address",
            publication_title: "This field is required"
        },
        errorPlacement: function(error, element) {
          if (element.attr("name") == "org_type") {
             error.insertAfter("#js-div-NA").addClass("col-md-offset-4 col-sm-offset-4 col-xs-offset-4");
          } else {
             error.insertAfter(element);
          }
        }
    });

    $("#js-international-form").validate({
        rules: {
            name: "required",
            title: "required",
            agency: "required",
            mailing_address: "required",
            phone: {
                required: true,
                regex: /^(1-)?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
            },
            email: {
                required: true,
                regex: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
            },
            supervisor_name: "required",
            supervisor_phone: {
                required: true,
                regex: /^(1-)?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
            },
            supervisor_email: {
                required: true,
                regex: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
            },
            population: "required",
            num_sworn_officers: "required",

        },
        messages: {
            name: "This field is required",
            title: "This field is required",
            agency: "This field is required",
            mailing_address: "This field is required",
            phone: "Please Enter a valid phone number",
            email: "Please Enter a valid email address",
            supervisor_name: "This field is required",
            supervisor_phone: "Please Enter a valid phone number",
            supervisor_email: "Please Enter a valid email address",
            population: "This field is required",
            num_sworn_officers: "This field is required",
        }
    });


});
