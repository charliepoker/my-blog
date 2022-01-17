"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 1,
          title: "hispotan de nu",
          content:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur in, earum molestiae doloribus sed error laudantium eos aspernatur quasi?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: "hispotan de nu",
          content:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur in, earum molestiae doloribus sed error laudantium eos aspernatur quasi?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          title: "hispotan de nu",
          content:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur in, earum molestiae doloribus sed error laudantium eos aspernatur quasi?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          title: "hispotan de nu",
          content:
            " Lorem doloribus sed error laudantium eos aspernatur quasi?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          title: "hispotan de nu",
          content:
            " Aut consequuntur in, earum molestiae doloribus sed error laudantium eos aspernatur quasi?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          title: "hispotan de nu",
          content:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur in, eos aspernatur quasi?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          title: "hispotan de nu",
          content:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium eos aspernatur quasi?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
