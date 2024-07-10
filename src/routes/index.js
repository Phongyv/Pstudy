
const HomeController = require('../controllers/homeController')

function route(app){
    app.get('/',HomeController.getHome);
};


module.exports = route;
