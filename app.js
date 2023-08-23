const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) =>{
    console.log('This always runs');
    next();
})


app.use('/add-produnct',(req, res, next) => {
    console.log('in another middle ware');
    res.send('<form action="/product" method="POST"><input type= "text" name="title"></input><input type= "number" name="size"></input><button type="submit">Add Product</button></form>');
})

app.use('/product',(req, res, next) => {
    //console.log(req.body);
    console.log('Title:', req.body.title);
    console.log('Size:', req.body.size);
    res.redirect('/');
})

app.use('/',(req, res, next) => {
    res.send('<h1>Hello from express!</h1>');
})

app.listen(4000);

