'use strict';
const {
  Model
} = require('sequelize');
const utilisateursprivileges = require('./utilisateursprivileges');
module.exports = (sequelize, DataTypes) => {
  class Privileges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Privileges.belongsToMany(models.Utilisateurs,{through: models.UtilisateursPrivileges})
    }
  }
  Privileges.init({
    libelle: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Privileges',
  });
  return Privileges;
};