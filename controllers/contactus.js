const path = require('path');
const rootDir = require('../util/path')

exports.getAddContactUs = (req, res, next) => {
    console.log('in another middle ware');
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
}

exports.postAddContactUs = (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/success');
}

exports.sucessMessage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../' ,'views','success.html'));
}


