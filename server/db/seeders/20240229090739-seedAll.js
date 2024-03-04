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
        title: 'Мода и кино',
        authorId: 2,
        duration: 10,
        description: 'Исследование взаимосвязи между модой и кинематографом',
        startDate: '2024-02-22',
        price: 15000,
      },
      {
        title: 'Теория моды',
        authorId: 2,
        duration: 8,
        description: 'Основы теории моды: стили, тренды, влияние на культуру',
        startDate: '2024-05-17',
        price: 10000,
      },
      {
        title: 'История моды',
        authorId: 2,
        duration: 10,
        description: 'Путешествие через времена: эволюция моды от древности до современности',
        startDate: '2024-03-04',
        price: 15000,
      },
      {
        title: 'Мода и искусство',
        authorId: 2,
        duration: 5,
        description: 'Влияние искусства на моду и наоборот: взаимосвязь между двумя сферами',
        startDate: '2024-07-01',
        price: 35000,
      },
      {
        title: 'Этика в моде',
        authorId: 2,
        duration: 12,
        description: 'Рассмотрение этических аспектов в индустрии моды: устойчивость, равенство и др.',
        startDate: '2024-06-12',
        price: 20000,
      },
      {
        title: 'Мода и технологии',
        authorId: 2,
        duration: 20,
        description: 'Исследование слияния моды и технологий: от носимой электроники до виртуальных примерок',
        startDate: '2024-08-01',
        price: 24000,
      },
    ]);
  

    await queryInterface.bulkInsert('CourseStyles', [
      {
        bgColor: '#B9DAF9',
        img: '/Group23.svg',
        direction: 'left',
        courseId: 1,
      },
      {
        bgColor: '#EDCED9',
        img: '/Group14.svg',
        direction: 'right',
        courseId: 2,
      },
      { 
        bgColor: '#CAE5E8',
        img: '/Group15.svg',
        direction: 'left',
        courseId: 3,
      },
      {
        bgColor: '#B9DAF9',
        img: '/Group23.svg',
        direction: 'left',
        courseId: 4,
      },
      {
        bgColor: '#EDCED9',
        img: '/Group14.svg',
        direction: 'right',
        courseId: 5,
      },
      { 
        bgColor: '#CAE5E8',
        img: '/Group15.svg',
        direction: 'left',
        courseId: 6,
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
