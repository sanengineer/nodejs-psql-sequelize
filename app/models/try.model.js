const { Sequelize } = require("sequelize/types");
const { sequelize } = require(".");

modele.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING,
    },
    desctiption: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOLEAN,
    },
  });

  return Tutorial;
};
