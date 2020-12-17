
const Sequelize = require("sequelize");
const db = require('../config/db');

var AkunDB = db.define(
  "akun_detail",
  {
    akun: { type: Sequelize.STRING },
    instan: { type: Sequelize.STRING },
    detail_instan: { type: Sequelize.STRING },
    createdAt: {
      type: Sequelize.DATE,
      field: 'createdAt',
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updatedAt'
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true
  }
);

module.exports = AkunDB;