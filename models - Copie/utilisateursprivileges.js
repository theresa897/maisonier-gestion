'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UtilisateursPrivileges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.UtilisateursPrivileges.belongsTo(models.Utilisateurs)
      models.UtilisateursPrivileges.belongsTo(models.Privileges)
    }
  }
  UtilisateursPrivileges.init({
    idUilisateus: DataTypes.STRING,
    idPrivileges: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UtilisateursPrivileges',
  });
  return UtilisateursPrivileges;
};