
class HoctapController {
    getLearn(req,res){
        res.render('learn');
    }
    getTailieu(req,res){
        res.render('tailieu');
    }
    getLuyentap(req,res){
        res.render('luyentap');
    }
    getUpdate(req,res){
        res.render('update');
    }
}

module.exports = new HoctapController;