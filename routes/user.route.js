const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../db/user.model');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (req, res,next) => {
    User.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
});

router.post('/create', (req, res) => {

    const user = new User({
        _id: mongoose.Types.ObjectId(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    });
    user.save()
        .then(() => res.json({ massage: "create" }))
        .catch(err => {
            console.log(err);
            next(err);
        })
});

router.put('/update', (req, res) => {
    res.json({ msg: 'updated' })
});

router.delete('/delete', (req, res) => {
    res.json({ msg: 'deleted' })
});


module.exports = router;