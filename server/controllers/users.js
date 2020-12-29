const User = require('../models/users');

// CREATES A NEW USER
const signup = async (req, res) => {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);

        });
}

module.exports = {
  signup
}
