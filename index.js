const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express();

//use morgan
app.use(morgan('combined'))

//set view engine
app.engine('handlebars',engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

//use static file
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
