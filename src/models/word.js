'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Word.hasMany(models.WordCategory, {
        foreignKey: 'word_id',
      });
    }
  }
  Word.init({
    word: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'word'
    },
  }, {
    sequelize,
    modelName: 'Word',
  });
  return Word;
};