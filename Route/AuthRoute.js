const AuthController = require('../config/Controller/AuthController')

module.exports = (router)=> {
    router.post('/login', AuthController.login)
    return router;
}