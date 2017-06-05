'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: sequelize.literal(CURRENT_TIMESTAMP)
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: sequelize.literal(CURRENT_TIMESTAMP)
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Lists');
  }
};