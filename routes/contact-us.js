const express = require('express');
const path = require('path');
const rootDir = require('../util/path')
const router = express.Router();

// /admin/add-product => GET
router.get('/contact-us',(req, res, next) => {
    console.log('in another middle ware');
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
})

// /admin/add-product => POST
router.post('/contact-us',(req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/success');
})

module.exports = router;