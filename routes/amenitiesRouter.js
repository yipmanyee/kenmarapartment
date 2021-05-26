const express = require('express');
const amenitiesRouter = express.Router();

amenitiesRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Welcome to Kenmar Apartment, Tacoma');
})
.post((req, res) => {
    res.end('POST operation not supported on /amenities');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /amenities');
})
.delete((req, res) => {
    res.end('DELETE operation not supported on /amenities');
});

module.exports = amenitiesRouter;