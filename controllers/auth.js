const auth = (req, res) => {
    return res.render('auth');
};

const register = (req, res) => {
    console.log(req.body);
};

const login = (req, res) => {
    console.log(req.body);
};

module.exports = {
    auth,
    register,
    login
};