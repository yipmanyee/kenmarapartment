const express = require('express');
const contactusRouter = express.Router();

contactusRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Welcome to Kenmar Apartment, Tacoma');
})
.post((req, res) => {
    res.end(`Will add firstname: ${req.body.firstname}, lastname: ${req.body.lastname} phone: ${req.body.phone}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /contactus');
})
.delete((req, res) => {
    res.end('DELETE operation not supported on /contactus');
});

module.exports = contactusRouter;