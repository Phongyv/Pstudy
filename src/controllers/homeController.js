
class HomeController {
    getHome(req,res){
        res.render('home');
    }
    getLearn(req,res){
        res.render('learn');
    }
    getInfo(req,res){
        res.render('info');
    }
    getDonate(req,res){
        res.render('donate');
    }
}

module.exports = new HomeController;