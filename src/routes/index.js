const express = require('express');
const users = require('./user')


var allRoutes = () => {
    
    var router = express.Router()
    router.use('/',users())
    return router;
}

module.exports = allRoutes;
