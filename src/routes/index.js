
const HomeController = require('../controllers/homeController')

function route(app){
    app.get('/',HomeController.getHome);
    app.get('/hoctap',HomeController.getLearn);
    app.get('/gioithieu',HomeController.getInfo);
    app.get('/donggop',HomeController.getDonate);
};


module.exports = route;
