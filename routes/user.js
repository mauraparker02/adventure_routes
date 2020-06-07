const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('../passport');

router.post('/', (req, res) => {
    console.log('user signup');

    // const { username, password } = req.body
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password)
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            });
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                description: "",
                routes: []
            });
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            });
        }
    });
});

router.post(
    '/login',
    (req, res, next) => {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body);
        next();
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
);

router.get('/user/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
});

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
});

router.post('/routes/:id', (req, res) => {
    console.log("Route to add to db: " + req.body.routes);
    User.findByIdAndUpdate({
        _id: req.params.id
    }, {
        $push: {
            routes: req.body.routes
        }
    })
    .then(route => res.json(route))
    .catch(err => res.json(err));
});

module.exports = router;