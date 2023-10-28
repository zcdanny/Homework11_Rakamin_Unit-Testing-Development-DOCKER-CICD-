"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const addTodos = [
      {
        title: "Ramanda Danny",
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "study Ramanda",
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "study Danny",
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "study CI/CD",
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Danny week 11",
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("Todos", addTodos, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Todos", null, {});
  },
};
