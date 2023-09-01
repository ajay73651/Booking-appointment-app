const path = require('path');
const rootDir = require('../util/path');
const Contact = require('../models/contactus');

exports.getAddContactUs = (req, res, next) => {
    console.log('in another middleware');
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
};

exports.postAddContactUs = (req, res, next) => {
    const { name, email, phone, call_date, call_time } = req.body;
    Contact.create({
        name,
        email,
        phone,
        calldate: call_date,
        callTime: call_time,
    })
    .then(() => {
        res.redirect('/admin/success');
    })
    .catch(err => {
        console.log(err);
        // Handle error
    });
};

exports.sucessMessage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'success.html'));
};
