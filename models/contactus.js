const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Contact = sequelize.define("Contact", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  calldate: {
    type: Sequelize.DATEONLY,
  },
  callTime: {
    type: Sequelize.TIME,
  },
});

module.exports = Contact;
