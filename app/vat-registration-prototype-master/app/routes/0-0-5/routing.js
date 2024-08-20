module.exports = function (router) {

    /* CHANGE ME TO THE VERSION YOURE WORKING ON */
    var version = "0-0-5";
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    router.get('/' + version + '/task-list/task-list', function (req, res) {
        var before_you_start_completed = req.session.before_you_start_completed;
        var eligibility_completed = req.session.eligibility_completed;
        var another_service_completed = req.session.another_service_completed;
        var MTD_completed = req.session.MTD_completed;
        var transactor_personal_info_complete = req.session.transactor_personal_info_complete;
        res.render('/' + version + '/task-list/task-list', {
            'before_you_start_completed': before_you_start_completed,
            'eligibility_completed': eligibility_completed,
            'another_service_completed': another_service_completed,
            'MTD_completed': MTD_completed,
            'transactor_personal_info_complete': transactor_personal_info_complete
        });
    });

    router.post('/' + version + '/eligibility/introduction', function (req, res) {
        res.redirect(301, '/' + version + '/eligibility/fixed-establishment-in-uk')
    })

    router.post('/' + version + '/eligibility/fixed-establishment-in-uk', function (req, res) {
        if (req.session.data['fixed-establishment'] == "No") {
            res.redirect(301, '/' + version + '/eligibility/distance-sales')
        } else {
            res.redirect(301, '/' + version + '/eligibility/uk-company')
        }

    })

    router.post('/' + version + '/eligibility/uk-company', function (req, res) {
        if (req.session.data['uk-company'] == "No") {
            res.redirect(301, '/' + version + '/eligibility/errors/cannot-use-this-service-otrs')
        } else {
            res.redirect(301, '/' + version + '/eligibility/land-and-property')
        }

    })

    router.post('/' + version + '/eligibility/land-and-property', function (req, res) {
        if (req.session.data['land-and-property'] == "Yes") {
            res.redirect(301, '/' + version + '/eligibility/errors/cannot-use-this-service-otrs')
        } else {
            res.redirect(301, '/' + version + '/eligibility/acquired-goods')
        }

    })

    router.post('/' + version + '/login', function (req, res) {
        res.redirect(301, '/' + version + '/honesty-declaration')
    })

    router.post('/' + version + '/honesty-declaration', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/whos-the-application-for')
    })

    router.post('/' + version + '/transactor-details/whos-the-application-for', function (req, res) {
        res.redirect(301, '/' + version + '/business/task-list')
    })

    router.post('/' + version + '/transactor-details/do-you-have-a-organisation-name', function (req, res) {
        if (req.session.data['have-organisation'] == "Yes") {
            res.redirect(301, '/' + version + '/transactor-details/organisation-name')
        } else {
            res.redirect(301, '/' + version + '/transactor-details/what-is-your-role-with-business')
        }

    })

    router.post('/' + version + '/transactor-details/organisation-name', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/what-is-your-role-with-business')
    })

    router.post('/' + version + '/transactor-details/what-is-your-role-with-business', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/full-name')
    })

    router.post('/' + version + '/transactor-details/full-name', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/date-of-birth')
    })

    router.post('/' + version + '/transactor-details/date-of-birth', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/national-insurance-number')
    })

    router.post('/' + version + '/transactor-details/national-insurance-number', function (req, res) {
        req.session.data['transactor_personal_completed'] = "Yes";
        res.redirect(301, '/' + version + '/business/task-list')
    })

    router.post('/' + version + '/transactor-details/telephone-number', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/email-address')
    })

    router.post('/' + version + '/transactor-details/postcode-lookup', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/choose-the-address')
    })

    router.post('/' + version + '/transactor-details/choose-the-address', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/confirm-your-address')
    })

    router.post('/' + version + '/transactor-details/confirm-your-address', function (req, res) {
        req.session.data['transactor_addresses_completed'] = "Yes";
        res.redirect(301, '/' + version + '/business/task-list')
    })

    router.post('/' + version + '/transactor-details/organisation-name', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/full-name')
    })

    router.post('/' + version + '/transactor-details/email-address', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/enter-the-verification-code')
    })

    router.post('/' + version + '/transactor-details/enter-the-verification-code', function (req, res) {
        res.redirect(301, '/' + version + '/transactor-details/email-address-verified')
    })

    router.post('/' + version + '/transactor-details/email-address-verified', function (req, res) {
        req.session.data['transactor_contact_completed'] = "Yes";
        res.redirect(301, '/' + version + '/transactor-details/Check-your-answers')
    })

    router.post('/' + version + '/transactor-details/Check-your-answers', function (req, res) {
        req.session.data['transactor_section_complete'] = "Yes";
        res.redirect(301, '/' + version + '/business/task-list')
    })

    // router.get('/' + version + '/transactor-details/check-your-answers', function (req, res) {
    //     req.session.data['transactor_section_complete '] = "Yes";
    //     res.render(version + '/business/check-your-answers-business', {

    //     });
    // });



    router.post('/' + version + '/eligibility/gone-over-threshold', function (req, res) {
        req.session.threshold = req.body.threshold;
        if (req.body.threshold == "Yes") {
            res.redirect(301, '/' + version + '/eligibility/more-than-85k-single-30-days')
        } else {
            res.redirect(301, '/' + version + '/eligibility/more-than-85k-next-30-days')
        }
    })

    router.post('/' + version + '/eligibility/more-than-85k-next-30-days', function (req, res) {
        res.redirect(301, '/' + version + '/eligibility/more-than-85k-single-30-days')
    })

    router.post('/' + version + '/eligibility/more-than-85k-single-30-days', function (req, res) {
        if (req.session.threshold == "Yes") {
            res.redirect(301, '/' + version + '/eligibility/apply-for-exception')
        } else if (req.session.threshold == "No" && req.body.taxable_sales == "No") {
            req.session.voluntarily = "Yes";
            res.redirect(301, '/' + version + '/eligibility/voluntarily-vat')
        } else {
            res.redirect(301, '/' + version + '/eligibility/estimated-turnover-next-12-months')
        }
    })

    router.post('/' + version + '/eligibility/voluntarily-vat', function (req, res) {
        if (req.session.data['voluntarily_vat'] == "No") {
            res.redirect(301, '/' + version + '/errors/voluntarily-error')
        } else {
            res.redirect(301, '/' + version + '/eligibility/estimated-turnover-next-12-months')
        }
    })

    router.post('/' + version + '/eligibility/apply-for-exception', function (req, res) {
        if (req.body.exception == "Yes") {
            res.redirect(301, '/' + version + '/errors/exception-error')
        } else {
            res.redirect(301, '/' + version + '/eligibility/estimated-turnover-next-12-months')
        }
    })

    router.post('/' + version + '/eligibility/estimated-turnover-next-12-months', function (req, res) {
        if (req.session.data['voluntarily'] == "Yes") {
            res.redirect(301, '/' + version + '/eligibility/mtd-voluntarily-information')
        } else {
            res.redirect(301, '/' + version + '/eligibility/mtd-mandatory-information')
        }
        req.session.eligibility_completed = "Yes";

    })

    router.post('/' + version + '/eligibility/mtd-voluntarily-information', function (req, res) {
        req.session.eligibility_completed = "Yes";
        res.redirect(301, '/' + version + '/eligibility/can-register-online')
    })

    router.post('/' + version + '/eligibility/mtd-mandatory-information', function (req, res) {
        req.session.eligibility_completed = "Yes";
        res.redirect(301, '/' + version + '/eligibility/can-register-online')
    })

    router.post('/' + version + '/eligibility/can-register-online', function (req, res) {
        req.session.eligibility_completed = "Yes";
        res.redirect(301, '/' + version + '/login')
    })

    router.post('/' + version + '/eligibility/taken-over-a-business', function (req, res) {
        if (req.body.business == "Yes") {
            res.redirect(301, '/' + version + '/errors/use-a-different-service')
        } else {
            res.redirect(301, '/' + version + '/eligibility/international-activities')
        }
    })

    router.post('/' + version + '/eligibility/international-activities', function (req, res) {
        if (req.body.international == "Yes") {
            res.redirect(301, '/' + version + '/errors/use-a-different-service-international')
        } else {
            res.redirect(301, '/' + version + '/eligibility/annual-accounting-scheme')
        }
    })

    router.post('/' + version + '/eligibility/annual-accounting-scheme', function (req, res) {
        if (req.body.accounting_scheme == "Yes") {
            res.redirect(301, '/' + version + '/errors/use-a-different-service')
        } else {
            res.redirect(301, '/' + version + '/eligibility/zero-rated-goods')
        }
    })

    router.post('/' + version + '/eligibility/zero-rated-goods', function (req, res) {
        if (req.body.zero_rated == "Yes") {
            res.redirect(301, '/' + version + '/eligibility/exemption-zero-rated-goods')
        } else {
            res.redirect(301, '/' + version + '/eligibility/agricultural-flat-rate-scheme')
        }
    })

    router.post('/' + version + '/eligibility/exemption-zero-rated-goods', function (req, res) {
        if (req.body.zero_rated_exemption == "Yes") {
            res.redirect(301, '/' + version + '/errors/apply-in-writting')
        } else {
            res.redirect(301, '/' + version + '/eligibility/agricultural-flat-rate-scheme')
        }
    })


    router.post('/' + version + '/eligibility/agricultural-flat-rate-scheme', function (req, res) {
        if (req.body.agricultural_frs == "Yes") {
            res.redirect(301, '/' + version + '/errors/agricultural-frs-error')
        } else {
            res.redirect(301, '/' + version + '/eligibility/property_racehorses')
        }
    })

    router.post('/' + version + '/eligibility/property_racehorses', function (req, res) {
        req.session.another_service_completed = "Yes";
        if (req.body.property_racehorses == "Yes") {
            res.redirect(301, '/' + version + '/errors/use-a-different-service')
        } else {
            res.redirect(301, '/' + version + '/task-list/task-list')
        }
    })

    router.post('/' + version + '/eligibility/MTD-information', function (req, res) {
        req.session.MTD_completed = "Yes";
        res.redirect(301, '/' + version + '/task-list/task-list')
    })

    // Business entity and known facts //

    router.post('/' + version + '/business/business-entity', function (req, res) {
        var type_of_business = req.session.data['type_of_business']

        if (type_of_business == "Partnership") {
            res.redirect(301, '/' + version + '/business/type-of-partnership')
        } else if (type_of_business == "Other") {
            res.redirect(301, '/' + version + '/business/business-entity-other') // Update to right route once working on this piece of work
        } else if (type_of_business == "Limited company") {
            res.redirect(301, '/' + version + '/business/what-is-the-companies-reg-number') // Update to right route once working on this piece of work
        } else if (type_of_business == "Sole trader") {
            res.redirect(301, '/' + version + '/business/personal-details')
        } else {
            res.redirect(301, '/' + version + '/business/#') // Update to right route once working on this piece of work
        }
    })

    router.post('/' + version + '/business/type-of-partnership', function (req, res) {
        var type_of_partnership = req.session.data['type_of_partnership']

        if (type_of_partnership == "General partnership" || type_of_partnership == "Scottish partnership") {
            res.redirect(301, '/' + version + '/business/SA-UTR')
        } else {
            res.redirect(301, '/' + version + '/business/what-is-the-companies-reg-number')
        }
    })

    router.post('/' + version + '/business/are-you-incorporated', function (req, res) {
        var incorporated = req.session.data['incorporated']
        if (incorporated == "Yes") {
            res.redirect(301, '/' + version + '/business/what-is-the-companies-reg-number')
        } else {
            res.redirect(301, '/' + version + '/business/business-entity-other')
        }
    })

    router.post('/' + version + '/business/business-entity-other', function (req, res) {
        var type_of_business = req.session.data['type_of_business']
        if (type_of_business == "Government organisation or public body" || type_of_business == "Unincorporated Association") {
            res.redirect(301, '/' + version + '/business/check-your-answers-business')
        } else if (type_of_business == "Trust") {
            res.redirect(301, '/' + version + '/business/SA-UTR')
        } else {
            res.redirect(301, '/' + version + '/business/business-entity-other')
        }
    })

    router.post('/' + version + '/business/personal-details', function (req, res) {
        res.redirect(301, '/' + version + '/business/date-of-birth')
    })

    router.post('/' + version + '/business/confirm-personal-details', function (req, res) {
        res.redirect(301, '/' + version + '/business/date-of-birth')
    })

    router.post('/' + version + '/business/date-of-birth', function (req, res) {
        req.session.dob_month = req.body.dob_month;
        res.redirect(301, '/' + version + '/business/national-insurance-number')
    })


    router.post('/' + version + '/business/self-assessment-postcode', function (req, res) {
        req.session.dob_month = req.body.dob_month;
        res.redirect(301, '/' + version + '/business/check-your-answers-business')
    })

    router.post('/' + version + '/business/national-insurance-number', function (req, res) {
        res.redirect(301, '/' + version + '/business/SA-UTR')
    })

    //Commented this out as we dicided to not include the TRN flow until we know more about it //

    // router.post('/' + version + '/business/temp-reference-number', function (req, res) {
    //     var temp_reference_number = req.session.data['temp-reference-number']
    //     if (temp_reference_number == "Yes") {
    //         res.redirect(301, '/' + version + '/business/what-is-the-reference-number')
    //     } else {
    //         res.redirect(301, '/' + version + '/business/check-your-answers-business')
    //     }
    // })

    // router.post('/' + version + '/business/what-is-the-reference-number', function (req, res) {
    //     res.redirect(301, '/' + version + '/business/SA-UTR')
    // })

    router.post('/' + version + '/business/SA-UTR', function (req, res) {
        var SA_UTR = req.session.data['SA_UTR']
        var type_of_partnership = req.session.data['type_of_partnership']

        if (type_of_partnership == "General partnership") {
            res.redirect(301, '/' + version + '/business/self-assessment-postcode')
        } else {
            res.redirect(301, '/' + version + '/business/check-your-answers-business')
        }

    })

    router.post('/' + version + '/business/CT-UTR', function (req, res) {
        var type_of_partnership = req.session.data['type_of_partnership']

        if (type_of_partnership == "Limited liability partnership" || type_of_partnership == "Limited partnership" || type_of_partnership == "Scottish limited partnership") {
            res.redirect(301, '/' + version + '/business/self-assessment-postcode')
        } else {
            res.redirect(301, '/' + version + '/business/check-your-answers-business')
        }
    })

    router.post('/' + version + '/business/what-is-the-companies-reg-number', function (req, res) {
        res.redirect(301, '/' + version + '/business/confirm-business-name')
    })

    router.post('/' + version + '/business/confirm-business-name', function (req, res) {
        res.redirect(301, '/' + version + '/business/CT-UTR')
    })

    router.get('/' + version + '/business/check-your-answers-business', function (req, res) {
        var dob_month = req.session.dob_month;
        req.session.data['known-facts-completed'] = "Yes";
        res.render(version + '/business/check-your-answers-business', {
            'months': months,
            'dob_month': dob_month
        });
    });

    router.post('/' + version + '/business/check-your-answers-business', function (req, res) {
        if (req.session.data['SA_UTR'] == "1234567899") {
            res.redirect(301, 'http://si-prototype.herokuapp.com/vat-iv')
        } else {
            res.redirect(301, '/' + version + '/business/task-list')
        }

    })

    router.post('/' + version + '/eligibility/non-uk', function (req, res) {
        var non_uk = req.session.data['non-uk']

        if (non_uk == "no") {
            res.redirect(301, '/' + version + '/eligibility/agricultural-flatrate-scheme')
        } else {
            res.redirect(301, '/' + version + '/eligibility/distance-sales')
        }
    })

    router.post('/' + version + '/eligibility/distance-sales', function (req, res) {
        var distance = req.session.data['distance']

        if (distance == "no") {
            res.redirect(301, '/' + version + '/eligibility/errors/cannot-use-this-service-otrs')
        } else {
            res.redirect(301, '/' + version + '/eligibility/errors/distance-sales-manual')
        }
    })

    router.post('/' + version + '/eligibility/acquired-goods', function (req, res) {

        if (req.session.data['acquired'] == "no") {
            res.redirect(301, '/' + version + '/eligibility/agricultural-flatrate-scheme')
        } else {
            res.redirect(301, '/' + version + '/eligibility/errors/aquired-goods')
        }
    })

    router.post('/' + version + '/eligibility/agricultural-flatrate-scheme', function (req, res) {
        var agricultural = req.session.data['agricultural']

        if (agricultural == "no") {
            res.redirect(301, '/' + version + '/eligibility/registering-a-division')
        } else {
            res.redirect(301, '/' + version + '/eligibility/errors/agricultural-flatrate-scheme')
        }
    })

    router.post('/' + version + '/eligibility/registering-a-division', function (req, res) {
        var division = req.session.data['division']

        if (division == "no") {
            res.redirect(301, '/' + version + '/eligibility/disposal-of-assets')
        } else {
            res.redirect(301, '/' + version + '/eligibility/errors/division')
        }
    })

    router.post('/' + version + '/eligibility/disposal-of-assets', function (req, res) {
        var assets = req.session.data['assets']

        if (assets == "no") {
            res.redirect(301, '/' + version + '/eligibility/mini-one-stop-shop')
        } else {
            res.redirect(301, '/' + version + '/eligibility/errors/assets')
        }
    })

    router.post('/' + version + '/eligibility/mini-one-stop-shop', function (req, res) {
        if (req.session.data['moss'] == "no") {
            res.redirect(301, '/' + version + '/eligibility/vat-registration-reason')
        } else {
            res.redirect(301, '/' + version + '/eligibility/errors/mini-one-stop-shop')
        }
    })

    router.post('/' + version + '/eligibility/vat-registration-reason', function (req, res) {
        if (req.session.data['vat-reason'] == "making or intending to make taxable supplies") {
            res.redirect(301, '/' + version + '/eligibility/gone-over-threshold')
        } else if (req.session.data['vat-reason'] == "setting up a VAT group") {
            res.redirect(301, '/' + version + '/eligibility/errors/cannot-use-this-service-otrs')
        } else {
            res.redirect(301, '/' + version + '/eligibility/can-register-online')
        }

    })

    router.post('/' + version + '/applicant_details/whats-the-role-in-business', function (req, res) {
        res.redirect(301, '/' + version + '/applicant_details/any-previous-names')
    })

    router.post('/' + version + '/applicant_details/any-previous-names', function (req, res) {
        if (req.body.changed_name == "yes") {
            res.redirect(301, '/' + version + '/applicant_details/whats-the-previous-name')
        } else {
            req.session.data['applicant_personal_detail_completed'] = "Yes";
            res.redirect(301, '/' + version + '/business/task-list')
        }
    })

    router.post('/' + version + '/applicant_details/whats-the-previous-name', function (req, res) {
        req.session.data['applicant_personal_detail_completed'] = "Yes";
        res.redirect(301, '/' + version + '/applicant_details/previous-name-date')
    })

    router.post('/' + version + '/applicant_details/previous-name-date', function (req, res) {
        req.session.previous_name_date_month = req.body.previous_name_date_month;
        res.redirect(301, '/' + version + '/business/task-list')
    })

    router.get('/' + version + '/applicant_details/check-your-answers', function (req, res) {
        var previous_name_date_month = req.session.previous_name_date_month;
        res.render(version + '/applicant_details/check-your-answers', {
            'months': months,
            'previous_name_date_month': previous_name_date_month
        });
    });


    router.post('/' + version + '/applicant_details/post-code-lookup', function (req, res) {
        res.redirect(301, '/' + version + '/applicant_details/choose-home-address')
    })

    router.post('/' + version + '/applicant_details/choose-home-address', function (req, res) {
        res.redirect(301, '/' + version + '/applicant_details/confirm-home-address')
    })

    router.post('/' + version + '/applicant_details/confirm-home-address', function (req, res) {
        res.redirect(301, '/' + version + '/applicant_details/lived-at-address-less-3-years')
    })

    router.post('/' + version + '/applicant_details/lived-at-address-less-3-years', function (req, res) {

        if (req.body.address_3_years == "yes") {
            res.redirect(301, '/' + version + '/applicant_details/previous-address-lookup')
        } else {
            req.session.data['applicant_addresses_completed'] = "Yes";
            res.redirect(301, '/' + version + '/business/task-list')
        }
    })

    router.post('/' + version + '/applicant_details/previous-address-lookup', function (req, res) {
        res.redirect(301, '/' + version + '/applicant_details/choose-previous-address')
    })

    router.post('/' + version + '/applicant_details/choose-previous-address', function (req, res) {
        res.redirect(301, '/' + version + '/applicant_details/confirm-previous-address')
    })

    router.post('/' + version + '/applicant_details/confirm-previous-address', function (req, res) {
        req.session.data['applicant_addresses_completed'] = "Yes";
        res.redirect(301, '/' + version + '/business/task-list')
    })

    router.post('/' + version + '/applicant_details/email-address', function (req, res) {
        var registering_own_business = req.session.data['on-behalf']
        if (registering_own_business == "Yes") {
            res.redirect(301, '/' + version + '/applicant_details/email-address-verification')
        } else {
            res.redirect(301, '/' + version + '/applicant_details/telephone-number')
        }
    })

    router.post('/' + version + '/applicant_details/email-address-verification', function (req, res) {
        res.redirect(301, '/' + version + '/applicant_details/email-address-verified')
    })

    router.post('/' + version + '/applicant_details/email-address-verified', function (req, res) {
        res.redirect(301, '/' + version + '/applicant_details/telephone-number')
    })

    router.post('/' + version + '/applicant_details/telephone-number', function (req, res) {
        res.redirect(301, '/' + version + '/applicant_details/check-your-answers')
    })

    router.post('/' + version + '/applicant_details/check-your-answers', function (req, res) {
        req.session.data['applicant_contact_completed'] = "Yes";
        res.redirect(301, '/' + version + '/company_details/trading-name')
    })

    router.post('/' + version + '/company_details/trading-name', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/business-address')
    })

    router.post('/' + version + '/company_details/business-address', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/previous-address')
    })

    router.post('/' + version + '/company_details/previous-address', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/select-address')
    })

    router.post('/' + version + '/company_details/select-address', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/confirm-address')
    })

    router.post('/' + version + '/company_details/confirm-address', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/business-mobile-number')
    })

    router.post('/' + version + '/company_details/business-mobile-number', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/business-website-question')
    })

    router.post('/' + version + '/company_details/business-website-question', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/business-website-url')
    })

    router.post('/' + version + '/company_details/business-website-url', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/contact-preference')
    })

    router.post('/' + version + '/company_details/contact-preference', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/main-income') // this will change to SIC code when built.
    })

    router.post('/' + version + '/company_details/sic-code-information', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/sic-code-search')
    })

    router.post('/' + version + '/company_details/ssic-code-search', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/sic-code-results')
    })

    router.post('/' + version + '/company_details/main-income', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/business-activities')
    })

    router.post('/' + version + '/company_details/business-activities', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/other-business-involvements')
    })

    router.post('/' + version + '/company_details/other-business-involvements', function (req, res) {
        if (req.session.data['business_involvements'] == "Yes") {
            res.redirect(301, '/' + version + '/company_details/business-name')
        } else {
            res.redirect(301, '/' + version + '/company_details/#')
        }
    })

    router.post('/' + version + '/company_details/business-name', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/vat-number')
    })

    router.post('/' + version + '/company_details/vat-number', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/still-trading')
    })

    router.post('/' + version + '/company_details/still-trading', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/check-your-answers-business-involvements')
    })

    router.post('/' + version + '/company_details/check-your-answers-business-involvements', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/business-involvements-list')
    })

    router.post('/' + version + '/company_details/change-business-involvement', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/business-involvements-list')
    })

    router.post('/' + version + '/company_details/business-involvements-list', function (req, res) {
        if (req.session.data['add-another'] == "Yes") {
            res.redirect(301, '/' + version + '/company_details/business-name')
        } else {
            res.redirect(301, '/' + version + '/company_details/total-value-turnover-next-12-months')
        }

    })

    router.post('/' + version + '/company_details/total-value-turnover-next-12-months', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/zero-rated-turnover')
    })

    router.post('/' + version + '/company_details/zero-rated-turnover', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/regularly-exceed-on-vat-purchases')
    })

    router.post('/' + version + '/company_details/regularly-exceed-on-vat-purchases', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/buy-or-sell-to-another-eu-member')
    })

    router.post('/' + version + '/company_details/buy-or-sell-to-another-eu-member', function (req, res) {
        if (req.session.data['eu-member'] == "Yes") {
            res.redirect(301, '/' + version + '/company_details/buy-goods-eu-12-months')
        } else {
            res.redirect(301, '/' + version + '/company_details/imports-or-exports')
        }

    })

    router.post('/' + version + '/company_details/buy-goods-eu-12-months', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/sell-goods-eu-12-months')
    })

    router.post('/' + version + '/company_details/sell-goods-eu-12-months', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/imports-or-exports')
    })

    router.post('/' + version + '/company_details/imports-or-exports', function (req, res) {
        if (req.session.data['imports_exports'] == "Yes") {
            res.redirect(301, '/' + version + '/company_details/apply_for_eori')
        } else {
            res.redirect(301, '/' + version + '/company_details/vat-registration-date')
        }
    })

    router.post('/' + version + '/company_details/apply_for_eori', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/vat-registration-date')
    })

    router.post('/' + version + '/company_details/vat-registration-date', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/vat-staggers')
    })

    router.post('/' + version + '/company_details/vat-staggers', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/bank-set-up')
    })

    router.post('/' + version + '/company_details/bank-set-up', function (req, res) {
        if (req.session.data['bank'] == "Yes") {
            res.redirect(301, '/' + version + '/company_details/personal-or-business')
        } else {
            res.redirect(301, '/' + version + '/company_details/reason-for-no-bank-account')
        }
    })

    router.post('/' + version + '/company_details/reason-for-no-bank-account', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/join-flat-rate')
    })

    router.post('/' + version + '/company_details/personal-or-business', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/bank-details')
    })

    router.post('/' + version + '/company_details/bank-details', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/join-flat-rate')
    })


    router.post('/' + version + '/company_details/join-flat-rate', function (req, res) {
        if (req.session.data['flat_rate'] == "Yes") {
            res.redirect(301, '/' + version + '/company_details/relevant-goods')
        } else {
            res.redirect(301, '/' + version + '/check-and-submit/final-check-your-answers')
        }
    })

    router.post('/' + version + '/company_details/relevant-goods', function (req, res) {
        if (req.session.data['relevant-goods'] == "Yes") {
            res.redirect(301, '/' + version + '/company_details/total-sales-next-3-months')
        } else {
            res.redirect(301, '/' + version + '/company_details/flat-rate-percentage')
        }
    })

    router.post('/' + version + '/company_details/total-sales-next-3-months', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/relevant-goods-sales')
    })

    router.post('/' + version + '/company_details/relevant-goods-sales', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/flat-rate-percentage')
    })

    router.post('/' + version + '/company_details/flat-rate-percentage', function (req, res) {
        res.redirect(301, '/' + version + '/check-and-submit/final-check-your-answers')
    })

    router.post('/' + version + '/check-and-submit/application-submitted', function (req, res) {
        res.redirect(301, '/' + version + '/check-and-submit/final-check-your-answers')
    })


    router.post('/' + version + '/company_details/partnership-members-list', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/partner-name')
    })

    router.post('/' + version + '/company_details/partner-name', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/partner-address-lookup')
    })

    router.post('/' + version + '/company_details/partner-address-lookup', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/select-partner-address')
    })

    router.post('/' + version + '/company_details/select-partner-address', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/confirm-partner-address')
    })

    router.post('/' + version + '/company_details/confirm-partner-address', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/partner-telephone-number')
    })

    router.post('/' + version + '/company_details/partner-telephone-number', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/partner-mobile-number')
    })

}
