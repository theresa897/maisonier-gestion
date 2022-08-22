

const express = require('express')

exports.routes = (() =>{
    let router = express.Router()

    router = require('./AuthRoute')(router)
    return router;
})()

