const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  music.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    singer: DataTypes.STRING,
    writer: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'music',
  });
  return music;
};