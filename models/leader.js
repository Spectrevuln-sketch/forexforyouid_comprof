
const Sequelize = require("sequelize");
const db = require('../config/db');

const LeaderDB = db.define(
  "leader_akun",
  {
    name: { type: Sequelize.STRING },
    pendapatan: { type: Sequelize.STRING },
    pengikut: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
    nickname: { type: Sequelize.STRING },
    gain: { type: Sequelize.STRING },
    last_day: { type: Sequelize.STRING },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true
  }
);

module.exports = LeaderDB;