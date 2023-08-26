
const path = require('path');
const rootDir = require('../util/path')

exports.getAddProduct = (req, res, next) => {
    console.log('in another middle ware');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
    console.log('Title:', req.body.title);
    console.log('Size:', req.body.size);
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../' ,'views','shop.html'));
}
