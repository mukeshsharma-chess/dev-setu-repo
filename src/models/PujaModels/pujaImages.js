// src/models/puja_images.js
export default (sequelize, DataTypes) => {
  const pujaImages = sequelize.define("pujaImages", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      field: "id",
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "image_url",
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
    pujaId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: "puja_id",
    },
  }, {
    tableName: "puja_images",
  });

  pujaImages.associate = (models) => {
    pujaImages.belongsTo(models.pujas, { foreignKey: "pujaId" });
  };

  return pujaImages;
};
