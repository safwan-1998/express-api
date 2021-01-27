'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('music', 'writer', Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
  }
};
