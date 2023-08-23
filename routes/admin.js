const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    console.log('in another middle ware');
    res.send('<form action="/admin/add-product" method="POST"><input type= "text" name="title"></input><input type= "number" name="size"></input><button type="submit">Add Product</button></form>');
})

// /admin/add-product => POST
router.post('/add-product',(req, res, next) => {
    console.log('Title:', req.body.title);
    console.log('Size:', req.body.size);
    res.redirect('/');
})

module.exports = router;