/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert('Users', [
      {
        name: 'a',
        email: 'a@a',
        password: await bcrypt.hash('a', 10),
        role: 'admin',
      },
      {
        name: 't',
        email: 't@t',
        password: await bcrypt.hash('t', 10),
        role: 'tutor',
      },
      {
        name: 'q',
        email: 'q@q',
        password: await bcrypt.hash('q', 10),
        role: 'user',
      },
      {
        name: 'z',
        email: 'z@z',
        password: await bcrypt.hash('q', 10),
        role: 'user',
      },

    ]);

    await queryInterface.bulkInsert('Courses', [
      {
        title: 'Первый курс',
        authorId: 2,
        description: 'Курс номер один',
        price: 25.99,
      },
      {
        title: 'Второй курс',
        authorId: 2,
        description: 'Курс номер два',
        price: 29.99,
      },
      {
        title: 'Третий курс',
        authorId: 2,
        description: 'Курс номер три',
        price: 22.99,
      },
      {
        title: 'Четвертый курс',
        authorId: 2,
        description: 'Курс номер четыре',
        price: 27.99,
      },
      {
        title: 'Пятый курс',
        authorId: 2,
        description: 'Курс номер пять',
        price: 19.99,
      },
      {
        title: 'Шестой курс',
        authorId: 2,
        description: 'Курс номер шесть',
        price: 24.99,
      },
    ]);

    await queryInterface.bulkInsert('CourseStyles', [
      {
        bgColor: 'pink',
        img: '/',
        direction: 'left',
        courseId: 1,
      },
      {
        bgColor: 'yellow',
        img: '/',
        direction: 'right',
        courseId: 2,
      },
      {
        bgColor: 'green',
        img: '/',
        direction: 'left',
        courseId: 3,
      },

    ]);

    await queryInterface.bulkInsert('Modules', [
      {
        name: 'Первый модуль первого курса',
        courseId: 1,
        order: 1,
        videoURL: '/',
      },
      {
        name: 'Второй модуль первого курса',
        courseId: 1,
        order: 2,
        videoURL: '/',
      },
      {
        name: 'Третий модуль первого курса',
        courseId: 1,
        order: 3,
        videoURL: '/',
      },
      // Modules for the second course (2 modules)
      {
        name: 'Первый модуль второго курса',
        courseId: 2,
        order: 1,
        videoURL: '/',
      },
      {
        name: 'Второй модуль второго курса',
        courseId: 2,
        order: 2,
        videoURL: '/',
      },
      // Module for the third course (1 module)
      {
        name: 'Первый модуль третьего курса',
        courseId: 3,
        order: 1,
        videoURL: '/',
      },
      // Module for the fourth course (1 module)
      {
        name: 'Первый модуль четвертого курса',
        courseId: 4,
        order: 1,
        videoURL: '/',
      },
      // Module for the fifth course (1 module)
      {
        name: 'Первый модуль пятого курса',
        courseId: 5,
        order: 1,
        videoURL: '/',
      },
      // Module for the sixth course (1 module)
      {
        name: 'Первый модуль шестого курса',
        courseId: 6,
        order: 1,
        videoURL: '/',
      },
    ]);

    await queryInterface.bulkInsert('Carts', [
      {
        userId: 3,
        courseId: 1,
      },
      {
        userId: 3,
        courseId: 2,
      },
      {
        userId: 3,
        courseId: 3,
      },
      {
        userId: 4,
        courseId: 4,
      },
      {
        userId: 4,
        courseId: 5,
      },
      {
        userId: 4,
        courseId: 3,
      },
    ]);

    await queryInterface.bulkInsert('PurchasedCourses', [
      {
        userId: 3,
        courseId: 4,
      },
      {
        userId: 3,
        courseId: 5,
      },
      {
        userId: 3,
        courseId: 6,
      },
      {
        userId: 4,
        courseId: 2,
      },
      {
        userId: 4,
        courseId: 3,
      },
      {
        userId: 4,
        courseId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
