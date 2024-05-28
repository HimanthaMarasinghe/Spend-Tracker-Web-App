const passport = require("passport");
const User = require("../models/user");

const auth = (req, res) => {
    return res.render('auth');
};

const register = (req, res) => {
    User.register(new User({ email: req.body.email, fName: req.body.fullName }), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.redirect('/auth');
        }
        passport.authenticate('local')(req, res, () => {
          res.redirect('/');
        });
      });
};

const login = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth",
    failureFlash: true
});

module.exports = {
    auth,
    register,
    login
};