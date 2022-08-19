'use strict';
const {
  Model
} = require('sequelize');
const utilisateursprivileges = require('./utilisateursprivileges');
module.exports = (sequelize, DataTypes) => {
  class Utilisateurs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Utilisateurs.belongToMany(models.privileges,{through: utilisateursprivileges})
    }
  }
  Utilisateurs.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    poste: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Utilisateurs',
  });
  return Utilisateurs;
};