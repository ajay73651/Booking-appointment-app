const Sequelize = require("sequelize");

const sequelize = new Sequelize("appointment_details", "root", "Ajay@19804", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
