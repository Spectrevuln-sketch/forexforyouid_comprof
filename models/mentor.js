const Sequelize = require("sequelize");
const db = require('../config/db');

var mentorDB = db.define(
  "mentor",
  {
    name: { type: Sequelize.STRING },
    slug: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
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
module.exports = mentorDB;