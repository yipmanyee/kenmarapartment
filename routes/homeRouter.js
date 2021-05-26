const express = require('express');
const Kenmar = require('../models/kenmar');
const homeRouter = express.Router();

homeRouter.route('/')
.get((req, res, next) => {
    Kenmar.find()
    .then(kenmar => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(kenmar);    
    })
    .catch(err => next(err));;
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /home');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /home');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /home');
});

module.exports = homeRouter;