module.exports = function (router) {

    /* CHANGE ME TO THE VERSION YOURE WORKING ON */
    var version = "0-0-3";
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

    router.post('/' + version + '/use-this-service/introduction', function (req, res) {
        res.redirect(301, '/' + version + '/use-this-service/non-uk')
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
        req.session.eligibility_completed = "Yes";
        res.redirect(301, '/' + version + '/use-this-service/can-register-online')
    })

    router.post('/' + version + '/use-this-service/can-register-online', function (req, res) {
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

    router.post('/' + version + '/use-this-service/non-uk', function (req, res) {
        var non_uk = req.session.data['non-uk']

        if (non_uk == "no") {
            res.redirect(301, '/' + version + '/use-this-service/agricultural-flatrate-scheme')
        } else {
            res.redirect(301, '/' + version + '/use-this-service/distance-sales')
        }
    })

    router.post('/' + version + '/use-this-service/distance-sales', function (req, res) {
        var distance = req.session.data['distance']

        if (distance == "no") {
            res.redirect(301, '/' + version + '/use-this-service/acquired-goods')
        } else {
            res.redirect(301, '/' + version + '/use-this-service/errors/distance-sales')
        }
    })

    router.post('/' + version + '/use-this-service/acquired-goods', function (req, res) {
        var acquired = req.session.data['acquired']

        if (acquired == "no") {
            res.redirect(301, '/' + version + '/use-this-service/agricultural-flatrate-scheme')
        } else {
            res.redirect(301, '/' + version + '/use-this-service/errors/aquired-goods')
        }
    })

    router.post('/' + version + '/use-this-service/agricultural-flatrate-scheme', function (req, res) {
        var agricultural = req.session.data['agricultural']

        if (agricultural == "no") {
            res.redirect(301, '/' + version + '/use-this-service/registering-a-division')
        } else {
            res.redirect(301, '/' + version + '/use-this-service/errors/agricultural-flatrate-scheme')
        }
    })

    router.post('/' + version + '/use-this-service/registering-a-division', function (req, res) {
        var division = req.session.data['division']

        if (division == "no") {
            res.redirect(301, '/' + version + '/use-this-service/disposal-of-assets')
        } else {
            res.redirect(301, '/' + version + '/use-this-service/errors/division')
        }
    })

    router.post('/' + version + '/use-this-service/disposal-of-assets', function (req, res) {
        var assets = req.session.data['assets']

        if (assets == "no") {
            res.redirect(301, '/' + version + '/use-this-service/mini-one-stop-shop')
        } else {
            res.redirect(301, '/' + version + '/use-this-service/errors/assets')
        }
    })

    router.post('/' + version + '/use-this-service/mini-one-stop-shop', function (req, res) {
        var moss = req.session.data['moss']

        if (moss == "no") {
            res.redirect(301, '/' + version + '/eligibility/gone-over-threshold')
        } else {
            res.redirect(301, '/' + version + '/use-this-service/errors/mini-one-stop-shop')
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
        }else {
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
        res.redirect(301, '/' + version + '/business/task-list')
    })

    router.post('/' + version + '/company_details/sic-code-information', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/sic-code-search')
    })

    router.post('/' + version + '/company_details/ssic-code-search', function (req, res) {
        res.redirect(301, '/' + version + '/company_details/sic-code-results')
    })
}