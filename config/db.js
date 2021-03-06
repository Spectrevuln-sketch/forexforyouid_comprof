const sequelize = require("sequelize");



const db = new sequelize("forexfor_comprof_db", "forexfor_db", "ES)?b.ki.Y1d", {
  // const db = new sequelize("forexfor_comprof_db", "root", "", {

  host: "localhost",

  dialect: "mysql"

});



db.sync({});



module.exports = db;

