"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 1,
          postId: 2,
          comment:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, explicabo?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          postId: 2,
          comment:
            "Lorem, ipsum dolor sit amet consectetur loremadipisicing elit. Doloremque, explicabo?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          postId: 1,
          comment:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, explicabo?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          postId: 2,
          comment:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, explicabo?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          postId: 3,
          comment:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, explicabo?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          postId: 3,
          comment:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, explicabo?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          postId: 3,
          comment:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, explicabo?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          postId: 3,
          comment:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, explicabo?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
