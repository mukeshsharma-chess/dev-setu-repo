// src/models/puja_offerings.js
export default (sequelize, DataTypes) => {
  const pujaOfferings = sequelize.define("pujaOfferings", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      field: "id",
    },
    offerimg: {
      type: DataTypes.TEXT, // Change this to DataTypes.TEXT for MariaDB/MySQL
      allowNull: false,
      field: "offerimg",
      // Add getter and setter to automatically convert between array and JSON string
      get() {
        const rawValue = this.getDataValue('offerimg');
        // Parse the JSON string back into an array. Handle null/empty string gracefully.
        return rawValue ? JSON.parse(rawValue) : [];
      },
      set(value) {
        // Stringify the array into a JSON string before saving to the database
        this.setDataValue('offerimg', JSON.stringify(value));
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "title",
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: "description",
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
    tableName: "puja_offerings",
  });

  pujaOfferings.associate = (models) => {
    pujaOfferings.belongsTo(models.pujas, { foreignKey: "pujaId" });
  };

  return pujaOfferings;
};