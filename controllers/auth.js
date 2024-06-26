const passport = require("passport");
const User = require("../models/user");

const auth = (req, res) => {
    return res.render('auth');
};

const register = (req, res) => {
    User.register(new User({ email: req.body.email, fName: req.body.name }), req.body.password, (err, user) => {
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

const logout = (req, res) => {
    req.logout((err) => {
        if(err) console.log(err);
        res.redirect("/auth");
    });
};

module.exports = {
    auth,
    register,
    login,
    logout
};