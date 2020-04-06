module.exports = {
    ensureAuthenticated: function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'Unauthorized Access, Please Login to Continue');
        res.redirect('/users/login');
    }
}