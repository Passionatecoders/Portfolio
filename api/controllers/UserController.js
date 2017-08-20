/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var CryptoJS = require("crypto-js");

module.exports = {
	 emailTo: function (req, res) {
	 	var sails = req._sails;
	 	if(_.isEmpty(req.body.to)){
	 		req.body.to = "parmarpriyank94@gmail.com"
	 	}
	 	if(_.isEmpty(req.body.subject)){
	 		req.body.subject = "Portfolio : Contact Us form details";
	 	}

		var bytes  = CryptoJS.AES.decrypt(ciphertext, '2');
		var plaintext = bytes.toString(CryptoJS.enc.Utf8);
		res.status(200);
		// res.jsonx(ciphertext.toString());
		 var helper = require('sendgrid').mail
           from_email = new helper.Email(req.body.from)
           to_email = new helper.Email(req.body.to)
           var to_mail = [];
           to_mail.push(to_email);
           subject = req.body.subject
           content = new helper.Content("text/html","<p>"+ req.body.message+"</p>")
        var sg = require('sendgrid')(plaintext);
        if (_.isEmpty(req.body.cc)) {
            var personalizations = [{
                to: to_mail,
                subject: subject
            }]
            console.log("personalizations",personalizations);
        } else {
        	cc_email = new helper.Email(req.body.cc)
            var personalizations = [{
                to: to_mail,
                cc: cc_email,
                subject: subject
            }]
        }	
        var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: {
                personalizations: personalizations,
                from: from_email,
                content: [{
                    type: 'text/html',
                    value: "<p>"+req.body.message+"</p>"	
                }]
                // attachments: attachments
            },
        });
        console.log("request >",request);
        sg.API(request, function (error, response) {
            if (error) {
                res.jsonx(error);
                // console.log('Error response received');
            } else {
                res.jsonx(response);
            }
        });
    },
};
