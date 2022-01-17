'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Roles", [
      {
        role_name: "Admin",
        role_description: "Has All privileges",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_name: "User",
        role_description: "Has Some privileges",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Roles', null, {});
    
  }
};
