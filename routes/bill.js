const express = require('express');
const connection = require("../connection");
const router = express.Router();
let auth = require('../services/authentication');
let ejs = require('ejs');
let pdf = require('html-pdf');
const path = require('path');
let fs = require('fs');
let uuid = require('uuid');


router.post('/generateReport', auth.authenticateToken, (req, res) => {
    let generatedUuid = uuid.v1();
    let orderDetails = req.body;
    let productDetailsReport = JSON.parse(orderDetails.productDetails);

    let query = "INSERT INTO bill(name, uuid, email, contactnumber, paymentMethod, total, productDetails, createdBy) VALUES(?,?,?,?,?,?,?,?)";
    connection.query(query, [orderDetails.name, generatedUuid, orderDetails.email, orderDetails.contactnumber, orderDetails.paymentMethod, orderDetails.total, orderDetails.productDetails, res.locals.email || 'admin'], (err, results) => {
        if (!err) {
            ejs.renderFile(path.join(__dirname, '', 'report.ejs'), {
                productDetails: productDetailsReport,
                name: orderDetails.name,
                email: orderDetails.email,
                contactnumber: orderDetails.contactnumber,
                paymentMethod: orderDetails.paymentMethod,
                total: orderDetails.total
            }, (err, result) => {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    pdf.create(result).toFile('./generated_pdf' + generatedUuid + '.pdf', function (err, results) {
                        if (err) {
                            console.log(err);
                            return res.status(500).json(err);
                        } else {
                            return res.status(200).json({ uuid: generatedUuid });
                        }
                    });
                }
            });
        } else {
            return res.status(500).json(err);
        }
    });
});

    module.exports = router;
    
            

