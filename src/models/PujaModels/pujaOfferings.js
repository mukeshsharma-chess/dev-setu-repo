// src/models/puja_offerings.js
export default (sequelize, DataTypes) => {
  const pujaOfferings = sequelize.define("pujaOfferings", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      field: "id",
    },
    offeringName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "offering_name",
    },
    offeringDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: "offering_description",
    },
    pujaId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: "puja_id",
    },
  }, {
    tableName: "puja_offerings",
  });

  pujaOfferings.associate = (models) => {
    pujaOfferings.belongsTo(models.pujas, { foreignKey: "pujaId" });
  };

  return pujaOfferings;
};
