
const HomeController = require('../controllers/homeController');

const hoctap = require('./hoctap')
const tailieu = require('./tailieu');
const luyentap = require('./luyentap');
const update = require('./update');

function route(app){
    app.get('/',HomeController.getHome);
    app.use('/hoctap',hoctap);
    app.use('/tailieu',tailieu);
    app.use('/luyentap',luyentap);
    app.use('/update',update);
    app.get('/gioithieu',HomeController.getInfo);
    app.get('/donggop',HomeController.getDonate);
};


module.exports = route;
