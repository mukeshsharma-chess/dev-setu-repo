// src/models/chadhavaBanner.js
export default (sequelize, DataTypes) => {
  const chadhavaBanner = sequelize.define("chadhavaBanner", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chadhavaId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: { model: "chadhava", key: "id" },
    },
  }, {
    tableName: "chadhava_banners", // actual DB table
  });

  chadhavaBanner.associate = (models) => {
    chadhavaBanner.belongsTo(models.chadhava, { foreignKey: "chadhavaId", onDelete: "CASCADE" });
  };

  return chadhavaBanner;
};