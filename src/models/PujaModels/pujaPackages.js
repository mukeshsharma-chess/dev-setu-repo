// src/models/puja_packages.js
export default (sequelize, DataTypes) => {
  const PujaPackage = sequelize.define("pujapackages", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      field: "id",
    },
    packageType: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "package_type",
    },
    packagePrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: "package_price",
    },
    pujaId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: "puja_id",
    },
  }, {
    tableName: "puja_packages",
  });

  PujaPackage.associate = (models) => {
    PujaPackage.belongsTo(models.pujas, { foreignKey: "pujaId" });
  };

  return PujaPackage;
};
