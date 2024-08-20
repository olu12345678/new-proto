module.exports = function (router) {

    /* CHANGE ME TO THE VERSION YOURE WORKING ON */
    var version = "0-16-0/mvp";
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    router.post('/' + version + '/login', function (req, res) {
        res.redirect(301, '/' + version + '/honesty-declaration')
    })

    router.post('/' + version + '/introduction', function (req, res) {
        res.redirect(301, '/' + version + '/business-entity')
    })

    router.post('/' + version + '/business-entity', function (req, res) {
        if (req.session.data['type_of_business'] == "UK company") {
            res.redirect(301, '/' + version + '/agricultural-flat-rate')
        } else if (req.session.data['type_of_business'] == "Division") {
            res.redirect(301, '/' + version + '/errors/cannot-use-this-service-otrs')
        } else {
            res.redirect(301, '/' + version + '/agricultural-flat-rate')
        }
    })

    router.post('/' + version + '/gone-over-threshold-2', function (req, res) { // Backward look
        req.session.threshold = req.body.threshold;
        if (req.body.threshold == "Yes") {
            res.redirect(301, '/' + version + '/more-than-85k-single-30-days-2') // Backward expectation look
        } else {
            res.redirect(301, '/' + version + '/more-than-85k-next-30-days-3') // Forward look
        }
    })

    router.post('/' + version + '/more-than-85k-single-30-days-2', function (req, res) {
        res.redirect(301, '/' + version + '/apply-for-exception-2')
    })

    router.post('/' + version + '/more-than-85k-next-30-days-3', function (req, res) {

        if (req.session.data['next_30_day_period'] == "Yes") {
            res.redirect(301, '/' + version + '/apply-for-exception-2')
        } else {
            res.redirect(301, '/' + version + '/voluntary-vat')
        }
    })

    router.post('/' + version + '/voluntary-vat', function (req, res) {
        if (req.body.voluntary_vat == "No") {
            res.redirect(301, '/' + version + '/errors/voluntary-error')
        } else {
            res.redirect(301, '/' + version + '/estimated-turnover-next-12-months')
        }
    })

    router.post('/' + version + '/apply-for-exception', function (req, res) {
        if (req.session.data['type_of_business'] == "UK company") {
            if (req.session.data['exception'] == "Yes") {
                res.redirect(301, '/' + version + '/errors/cannot-use-this-service-otrs')
            } else {
                res.redirect(301, '/' + version + '/errors/cannot-use-this-service-otrs')
            }

        } else if (req.session.data['type_of_business'] == "Sole trader") {
            if (req.session.data['exception'] == "Yes") {
                res.redirect(301, '/' + version + '/errors/cannot-use-this-service-otrs')
            } else {
                res.redirect(301, '/' + version + '/errors/cannot-use-this-service-otrs')
            }
        } else {
            res.redirect(301, '/' + version + '/estimated-turnover-next-12-months')
        }
    })

    router.post('/' + version + '/apply-for-exception-2', function (req, res) {
        res.redirect(301, '/' + version + '/estimated-turnover-next-12-months')
    })


    router.post('/' + version + '/estimated-turnover-next-12-months', function (req, res) {
        res.redirect(301, '/' + version + '/zero-rated-sales')
    })

    router.post('/' + version + '/have-nino', function (req, res) {
        if (req.session.data['have-nino'] == "Yes") {
            res.redirect(301, '/' + version + '/gone-over-threshold-2')
        } else {
            res.redirect(301, '/' + version + '/errors/cannot-use-this-service-otrs')
        }
    })

    router.post('/' + version + '/exemption', function (req, res) {
        res.redirect(301, '/' + version + '/mtd-mandatory-information')
    })

    router.post('/' + version + '/mtd-voluntary-information', function (req, res) {
        res.redirect(301, '/' + version + '/can-register-online')
    })

    router.post('/' + version + '/mtd-mandatory-information', function (req, res) {
        res.redirect(301, '/' + version + '/can-register-online')
    })

    router.post('/' + version + '/fixed-establishment-in-uk', function (req, res) {
        if (req.session.data['fixed-establishment'] == "No") {
            res.redirect(301, '/' + version + '/distance-sales')
        } else {
            res.redirect(301, '/' + version + '/uk-company')
        }
    })

    router.post('/' + version + '/distance-sales', function (req, res) {
        var distance = req.session.data['distance']

        if (distance == "no") {
            res.redirect(301, '/' + version + '/errors/cannot-use-this-service-otrs')
        } else {
            res.redirect(301, '/' + version + '/errors/distance-sales-manual')
        }
    })

    router.post('/' + version + '/uk-company', function (req, res) {
        if (req.session.data['uk-company'] == "No") {
            res.redirect(301, '/' + version + '/errors/cannot-use-this-service-otrs')
        } else {
            res.redirect(301, '/' + version + '/gone-over-threshold-2')
        }
    })

    router.post('/' + version + '/involved-more-business-status', function (req, res) {
        if (req.session.data['business-status'] == "No") {
            res.redirect(301, '/' + version + '/own-racehorses-buy-sell-property')
        } else {
            res.redirect(301, '/' + version + '/apply-for-exception')
        }
    })

    router.post('/' + version + '/business-activities-next-12-months', function (req, res) {
        if (req.session.data['international-activities'] == "No") {
            if (req.session.data['type_of_business'] == "Sole trader") {
                res.redirect(301, '/' + version + '/apply-for-exception')
            } else {
                res.redirect(301, '/' + version + '/involved-more-business-status')
            }
        } else {
            res.redirect(301, '/' + version + '/errors/business-activities-next-12-months')
        }
    })

    router.post('/' + version + '/zero-rated-sales', function (req, res) {
        if (req.session.data['zero-rated-sales'] == "No") {
            res.redirect(301, '/' + version + '/mtd-mandatory-information')
        } else {
            res.redirect(301, '/' + version + '/exemption')
        }
    })

    router.post('/' + version + '/agricultural-flat-rate', function (req, res) {
        if (req.session.data['agricultural_frs'] == "No") {
            res.redirect(301, '/' + version + '/business-activities-next-12-months')
        } else {
            res.redirect(301, '/' + version + '/errors/agricultural-flat-rate')
        }
    })

    router.post('/' + version + '/own-racehorses-buy-sell-property', function (req, res) {
        if (req.session.data['own-racehorses-buy-sell-propety'] == "Yes") {
            res.redirect(301, '/' + version + '/apply-for-exception')
        } else {
            res.redirect(301, '/' + version + '/annual-accounting')
        }
    })

    router.post('/' + version + '/annual-accounting', function (req, res) {
        if (req.session.data['annual-accounting'] == "Yes") {
            res.redirect(301, '/' + version + '/apply-for-exception')
        } else {
            res.redirect(301, '/' + version + '/whos-the-application-for')
        }

    })

    router.post('/' + version + '/can-register-online', function (req, res) {
        res.redirect(301, '/' + version + '/what-is-the-companies-reg-number')
    })

    router.post('/' + version + '/honesty-declaration', function (req, res) {
        res.redirect(301, '/' + version + '/introduction')
    })

    router.post('/' + version + '/whos-the-application-for', function (req, res) {
        if (req.session.data['on-behalf'] == "Yes, I want to register my business") {
            res.redirect(301, '/' + version + '/have-nino')
        } else {
            res.redirect(301, '/' + version + '/errors/cannot-use-this-service-otrs')
        }
    })

    router.post('/' + version + '/what-is-the-companies-reg-number', function (req, res) {
        res.redirect(301, '/' + version + '/confirm-business-name')
    })

    router.post('/' + version + '/confirm-business-name', function (req, res) {
        res.redirect(301, '/' + version + '/CT-UTR')
    })

    router.post('/' + version + '/CT-UTR', function (req, res) {
        res.redirect(301, '/' + version + '/check-your-answers-business')
    })

    router.post('/' + version + '/check-your-answers-business', function (req, res) {
        res.redirect(301, '/' + version + '/full-name')
    })

    router.post('/' + version + '/full-name', function (req, res) {
        res.redirect(301, '/' + version + '/date-of-birth')
    })

    router.post('/' + version + '/date-of-birth', function (req, res) {
        res.redirect(301, '/' + version + '/national-insurance-number')
    })

    router.post('/' + version + '/national-insurance-number', function (req, res) {
        res.redirect(301, '/' + version + '/whats-the-role-in-business')
    })

    router.post('/' + version + '/whats-the-role-in-business', function (req, res) {
        res.redirect(301, '/' + version + '/any-previous-names')
    })

    router.post('/' + version + '/any-previous-names', function (req, res) {
        if (req.body.changed_name == "yes") {
            res.redirect(301, '/' + version + '/date-of-name-change')
        } else {
            res.redirect(301, '/' + version + '/post-code-lookup')
        }
    })

    router.post('/' + version + '/date-of-name-change', function (req, res) {
        res.redirect(301, '/' + version + '/post-code-lookup')
    })

    router.post('/' + version + '/post-code-lookup', function (req, res) {
        res.redirect(301, '/' + version + '/choose-home-address')
    })

    router.post('/' + version + '/choose-home-address', function (req, res) {
        res.redirect(301, '/' + version + '/confirm-home-address')
    })

    router.post('/' + version + '/confirm-home-address', function (req, res) {
        res.redirect(301, '/' + version + '/lived-at-address-less-3-years')
    })

    router.post('/' + version + '/lived-at-address-less-3-years', function (req, res) {
        if (req.session.data['address_3_years'] == "no") {
            res.redirect(301, '/' + version + '/previous-address-lookup')
        } else {
            res.redirect(301, '/' + version + '/email-address')
        }
    })

    router.post('/' + version + '/previous-address-lookup', function (req, res) {
        res.redirect(301, '/' + version + '/choose-previous-address')
    })

    router.post('/' + version + '/choose-previous-address', function (req, res) {
        res.redirect(301, '/' + version + '/confirm-previous-address')
    })

    router.post('/' + version + '/confirm-previous-address', function (req, res) {
        res.redirect(301, '/' + version + '/email-address')
    })

    router.post('/' + version + '/email-address', function (req, res) {
        res.redirect(301, '/' + version + '/email-address-verification')
    })

    router.post('/' + version + '/email-address-verification', function (req, res) {
        res.redirect(301, '/' + version + '/email-address-verified')
    })

    router.post('/' + version + '/email-address-verified', function (req, res) {
        res.redirect(301, '/' + version + '/telephone-number')
    })

    router.post('/' + version + '/telephone-number', function (req, res) {
        res.redirect(301, '/' + version + '/trading-name')
    })

    router.post('/' + version + '/trading-name', function (req, res) {
        res.redirect(301, '/' + version + '/previous-address')
    })

    router.post('/' + version + '/business-address', function (req, res) {
        if (req.session.data['business-address-same'] == "Yes") {
            res.redirect(301, '/' + version + '/business-contact-details')
        } else {
            res.redirect(301, '/' + version + '/previous-address')
        }
    })

    router.post('/' + version + '/previous-address', function (req, res) {
        res.redirect(301, '/' + version + '/select-address')
    })

    router.post('/' + version + '/select-address', function (req, res) {
        res.redirect(301, '/' + version + '/confirm-address')
    })

    router.post('/' + version + '/confirm-address', function (req, res) {
        res.redirect(301, '/' + version + '/business-contact-details')
    })

    router.post('/' + version + '/business-contact-details', function (req, res) {
        res.redirect(301, '/' + version + '/contact-preference')
    })

    router.post('/' + version + '/contact-preference', function (req, res) {
        res.redirect(301, '/' + version + '/business-activities')
    })

    router.post('/' + version + '/business-activities', function (req, res) {
        res.redirect(301, '/' + version + '/sic-code-information')
    })

    router.post('/' + version + '/sic-code-information', function (req, res) {
        res.redirect(301, '/' + version + '/sic-code-search')
    })

    router.post('/' + version + '/sic-code-search', function (req, res) {
        if (req.session.data['sic_code_search'] == "42110") {
            res.redirect(301, '/' + version + '/check-and-confirm-sic-codes')
        } else {
            res.redirect(301, '/' + version + '/sic-code-results')
        }
    })

    router.post('/' + version + '/check-and-confirm-sic-codes', function (req, res) {
        if (req.session.data['sic_code_search'] == "42110") {
            res.redirect(301, '/' + version + '/tell-us-more')
        } else {
            res.redirect(301, '/' + version + '/main-income')
        }
    })

    router.post('/' + version + '/tell-us-more', function (req, res) {
        res.redirect(301, '/' + version + '/supply-workers')
    })

    router.post('/' + version + '/supply-workers', function (req, res) {
        if (req.session.data['supply-workers'] == "Yes") {
            res.redirect(301, '/' + version + '/supply-workers-number')
        } else {
            res.redirect(301, '/' + version + '/intermediary-arranging')
        }
    })

    router.post('/' + version + '/supply-workers-number', function (req, res) {
        res.redirect(301, '/' + version + '/zero-rated-turnover')
    })

    router.post('/' + version + '/intermediary-arranging', function (req, res) {
        res.redirect(301, '/' + version + '/zero-rated-turnover')
    })

    router.post('/' + version + '/sic-code-results', function (req, res) {
        res.redirect(301, '/' + version + '/check-and-confirm-sic-codes')
    })

    router.post('/' + version + '/main-income', function (req, res) {
        res.redirect(301, '/' + version + '/zero-rated-turnover')
    })

    router.post('/' + version + '/zero-rated-turnover', function (req, res) {
        res.redirect(301, '/' + version + '/regularly-exceed-on-vat-purchases')
    })

    router.post('/' + version + '/regularly-exceed-on-vat-purchases', function (req, res) {
        res.redirect(301, '/' + version + '/imports-or-exports')
    })

    router.post('/' + version + '/imports-or-exports', function (req, res) {
        res.redirect(301, '/' + version + '/vat-registration-date')
    })

    router.post('/' + version + '/apply_for_eori', function (req, res) {
        res.redirect(301, '/' + version + '/vat-registration-date')
    })

    router.post('/' + version + '/vat-registration-date', function (req, res) {
        res.redirect(301, '/' + version + '/vat-staggers-type')
    })

    router.post('/' + version + '/vat-staggers-type', function (req, res) {
        if (req.session.data['staggers'] == "Monthly") {
            res.redirect(301, '/' + version + '/bank-set-up')
        } else {
            res.redirect(301, '/' + version + '/vat-staggers')
        }
    })

    router.post('/' + version + '/vat-staggers', function (req, res) {
        res.redirect(301, '/' + version + '/bank-set-up')
    })

    router.post('/' + version + '/bank-set-up', function (req, res) {
        if (req.session.data['bank'] == "Yes") {
            res.redirect(301, '/' + version + '/bank-details')
        } else {
            res.redirect(301, '/' + version + '/reason-for-no-bank-account')
        }
    })

    router.post('/' + version + '/reason-for-no-bank-account', function (req, res) {
        if (req.session.data['estimate'] <= 150000) {
            res.redirect(301, '/' + version + '/join-flat-rate')
        } else {
            res.redirect(301, '/' + version + '/check-and-submit/final-check-your-answers')
        }
    })

    router.post('/' + version + '/personal-or-business', function (req, res) {
        res.redirect(301, '/' + version + '/bank-details')
    })

    router.post('/' + version + '/bank-details', function (req, res) {
        if (req.session.data['estimate'] <= 150000) {
            res.redirect(301, '/' + version + '/join-flat-rate')
        } else {
            res.redirect(301, '/' + version + '/check-and-submit/final-check-your-answers')
        }
    })


    router.post('/' + version + '/join-flat-rate', function (req, res) {
        if (req.session.data['flat_rate'] == "Yes") {
            res.redirect(301, '/' + version + '/relevant-goods')
        } else {
            res.redirect(301, '/' + version + '/check-and-submit/final-check-your-answers')
        }
    })

    router.post('/' + version + '/relevant-goods', function (req, res) {
        if (req.session.data['relevant-goods'] == "Yes") {
            res.redirect(301, '/' + version + '/total-sales-next-3-months')
        } else {
            res.redirect(301, '/' + version + '/flat-rate-percentage')
        }
    })

    router.post('/' + version + '/total-sales-next-3-months', function (req, res) {
        res.redirect(301, '/' + version + '/relevant-goods-sales')
    })

    router.post('/' + version + '/relevant-goods-sales', function (req, res) {
        res.redirect(301, '/' + version + '/flat-rate-percentage')
    })

    router.post('/' + version + '/flat-rate-percentage', function (req, res) {
        res.redirect(301, '/' + version + '/check-and-submit/final-check-your-answers')
    })

    router.post('/' + version + '/check-and-submit/final-check-your-answers', function (req, res) {
        res.redirect(301, '/' + version + '/check-and-submit/confirmation')
    })


}
