"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "charliepoker",
          email: "iheanachocharlie@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          role_id: 1,
        },
        {
          username: "ozombo",
          email: "ozombo@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          role_id: 2,
        },
        {
          username: "kevo",
          email: "kelvin@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          role_id: "2",
        },
        {
          username: "Bond007",
          email: "Bond007@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          role_id: "2",
        },
        {
          username: "leslie",
          email: "leslie@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          role_id: "2",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
