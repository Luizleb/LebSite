
module.exports = {
    indexGet: function(req, res){
        res.render('uploadGet');
    },
    indexPost: function(req, res){
        console.log(req.file);
        res.render('home',{remark:'File Saved'});
    }
}