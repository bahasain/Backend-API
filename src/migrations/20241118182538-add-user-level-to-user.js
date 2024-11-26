'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'user_level', {
      type: Sequelize.INTEGER,
      allowNull: true, // Sesuaikan dengan kebutuhan Anda
      defaultValue: 1, // Optional, level default jika diperlukan
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'user_level');
  },
};
