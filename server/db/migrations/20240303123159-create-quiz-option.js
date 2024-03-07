'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuizOptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      variant: {
        type: Sequelize.STRING,
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      comment: {
        type: Sequelize.TEXT,
      },
      quizId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Quizzes',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('QuizOptions');
  },
};
