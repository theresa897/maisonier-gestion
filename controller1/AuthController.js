
const db = require("../models");
const config = require("../config/auth.config.js")
const model = require("../models")
const {Op} =require("sequelize")
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = async(req, res) => {

  const {login, password} = req.body
    model.Utilisateurs.findOne({
      where: {
        [Op.or]: [{telephone:login}, {email:login}]
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
          password,
          user.password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: token,
            message: "Invalid Password!"
          });
        }else
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
        res.json({token})
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({ message: err.message });
      });
    }