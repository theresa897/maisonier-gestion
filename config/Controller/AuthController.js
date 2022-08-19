
const bcrypt = require('bcryptjs')
const authjwt= require('../../middleware/auth.jwt.js')
const utilisateurs = require('../../models/utilisateurs')
const Op = require('sequelize')
const { json } = require('body-parser')

exports.login = async(req, res) =>{
    const {login, password} = req.body;

    if(!login){
        return res.status(404).json({
            error: 'Empty field for login'
        })
    }

    if(!password){
        return res.status(404).json({
            error: 'Enter your password'
        })
    }

    const user = await utilisateurs.findOne({
        where:{
            [Op.or]:{tel:login, email:login}
        }
    })

    

    if(!user){return res.status(404).json('Utilisateur introuvable')}
    
    if(!bcrypt.compareSync(password,utilisateurs.password)){
        return res.status(404).json({
            error: 'Incorrect password'
        })
    }

    const token = authjwt.generateTokenForUser(user)
    
    return res.json({
        token,
        id: utilisateurs.id
    })
      
}
