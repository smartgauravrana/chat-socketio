const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.addUser = (req, res) => {
    console.log('Registering User');
    const {username, password} = req.body;
    const newUser = new User({
        username: username,
        password: password
    });

    User.findOne({username: username}, (err, user) =>{
        if(err) {
            res.status(400).json(err);
        } else if(user !== null) {
            res.send("user already exists");
        } else {
            newUser
            .save()
            .then(user => {
                res.json(user);
                console.log('user created', user);
            })
            .catch(err => res.status(400).json(err));
        }
    })    
}

module.exports.login = (req, res) => {
    console.log("Logging in :", req.body.username);

    const {username, password} = req.body;

    User.findOne({username: username}, (err, user) => {
        if(err) {
            res.status(400).json(err);
        } else if(user) {
            if(password == user.password) {
                res.json({success: true});
            } else{
                res.status(401).json({success: false, message: "check password"})
            }
        } else{
            res.status(401).json({success: false, message: "username not found"})
        }
    });
};
