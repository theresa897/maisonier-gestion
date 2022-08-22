
const jwt = require("jsonwebtoken");
//const config = require("../config/auth.config.js");
const Utilisateur = require("../models/utilisateurs");
var SECRET = 'dzeufak_secet-jwtToken'

module.exports = {

    generateTokenFromUser: function (userData){
        return jwt.sign({
            userid: userData.userid
        },
        SECRET,{
            expiresIn: 1 * 24 *60 * 60 * 1000
        });
    }
}









