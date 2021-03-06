const Sequelize = require("sequelize");
const db = require('../config/db');

var PromoDB = db.define(
  "pengajuan_promo",
  {
    nama: {type:Sequelize.STRING},
    email: {type:Sequelize.STRING},
    alamat:{type:Sequelize.STRING},
    contact:{type:Sequelize.STRING},
    kota:{type:Sequelize.STRING},
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
module.exports = PromoDB;