const AuthController = require('../controller1/AuthController')
const {login} = AuthController;
const express = require('express');
const router = express.Router()

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.post("/signin", AuthController.signin);

    return app 
}