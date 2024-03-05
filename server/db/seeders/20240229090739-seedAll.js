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
        name: 'Герои моды в кино',
        courseId: 1,
        order: 1,
        videoURL: 'https://www.youtube.com/embed/tWgbqMI61wY?si=hLiU355Z0RiESldY',
        article: `<div>
          <h2>Мода и Кино</h2>
          <p>История взаимосвязи моды и кино начинается с самых ранних дней кинематографа. Кино всегда было мощным инструментом влияния на моду и образ жизни. Иконические образы созданные кинематографистами, часто становились эталонами стиля для миллионов зрителей по всему миру.</p>
          <p>Одним из самых ярких примеров влияния кино на моду является фильм "Завтрак у Тиффани" 1961 года, где Одри Хепберн появилась в маленьком черном платье от Живанши. Этот образ не только стал легендарным, но и сыграл значительную роль в популяризации маленького черного платья как необходимого элемента в гардеробе каждой женщины.</p>
          <p>Современное кино продолжает оказывать влияние на моду. Фильмы и сериалы задают новые модные тенденции и вдохновляют дизайнеров на создание коллекций. К примеру, сериал "Игра престолов" привел к возрождению интереса к средневековой моде, а "Великий Гэтсби" вновь ввел в моду стиль 20-х годов.</p>
          <p>Таким образом, связь между модой и кинематографом является взаимной. Кино служит источником вдохновения для модельеров, а мода, в свою очередь, помогает создателям фильмов и сериалов воплощать образы персонажей, делая их запоминающимися и узнаваемыми.</p>
          </div>`.trim(),
      },
      {
        name: 'Мода и кино 2000-х',
        courseId: 1,
        order: 2,
        videoURL: 'https://www.youtube.com/embed/jceRquH6tT8?si=8YCmhk-iA2AsW6st',
        article: `<div>
        <h2>Мода и Кино 2000-х</h2>
        <p>Начало нового тысячелетия в киноиндустрии ознаменовалось появлением фильмов, которые оказали значительное влияние на модные тенденции того времени. Эпоха 2000-х была периодом экспериментов и смелых решений как в кинематографе, так и в моде. Фильмы того времени не только отражали текущие модные тенденции, но и задавали новые направления.</p>
        <p>Один из ярких примеров — фильм "Дьявол носит Prada" (2006), который погружает зрителя в мир высокой моды и демонстрирует его взаимосвязь с личностным ростом героини. Мода в этом фильме становится не просто фоном для сюжета, но и ключевым элементом, влияющим на развитие персонажей.</p>
        <p>Фильм "Секс в большом городе" (2008), основанный на одноименном сериале, также оказал огромное влияние на моду 2000-х. Карри Брэдшоу и её подруги стали иконами стиля для многих женщин по всему миру, а их образы вдохновили целое поколение на эксперименты с одеждой и аксессуарами.</p>
        <p>Мода и кино 2000-х годов тесно переплетены, демонстрируя взаимное влияние и вдохновение. Эта эпоха оставила значительный след в истории моды, многие тенденции которой продолжают возвращаться в современные коллекции ведущих дизайнеров.</p>
        </div>`.trim(),
      },
      {
        name: 'Третий модуль Моды и кино',
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
        userId: 1,
        courseId: 1,
      },
      {
        userId: 1,
        courseId: 2,
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

    await queryInterface.bulkInsert('Quizzes', [
      {
        question: 'Кто из дизайнеров создал костюмы для фильма "Большой Гэтсби" 1974 года?',
        moduleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какой фильм считается революционным в плане моды и стиля 1990-х?',
        moduleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Какой актрисе принадлежит знаменитая фраза "Мне нужно больше гардероба" из фильма "Дьявол носит Prada"?',
        moduleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какой дизайнер был ответственен за наряды в фильме "Матрица"?',
        moduleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какой фильм оказал значительное влияние на моду женских шляп в 1950-х годах?',
        moduleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какой фильм 2000-х спровоцировал возрождение интереса к ретро моде?',
        moduleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какой актер стал иконой стиля после выхода "Бойцовского клуба"?',
        moduleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какой элемент одежды стал массово популярным после фильма "Матрица"?',
        moduleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какой фильм сделал популярными солнцезащитные очки "авиаторы"?',
        moduleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какой фильм 2000-х привел к всплеску популярности готической моды?',
        moduleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('QuizOptions', [
      {
        quizId: 1,
        variant: 'Коко Шанель',
        isCorrect: false,
        comment: 'Неверно. Костюмы для фильма создал Ральф Лорен.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 1,
        variant: 'Ральф Лорен',
        isCorrect: true,
        comment: 'Верно! Ральф Лорен создал костюмы для "Большого Гэтсби".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 1,
        variant: 'Марк Джейкобс',
        isCorrect: false,
        comment: 'Неправильно. Ответ - Ральф Лорен.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 1,
        variant: 'Донателла Версаче',
        isCorrect: false,
        comment: 'Нет, костюмы для фильма разработал Ральф Лорен.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 1,
        variant: 'Том Форд',
        isCorrect: false,
        comment: 'Ошибка, правильный ответ - Ральф Лорен.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Ответы на второй вопрос
      {
        quizId: 2,
        variant: 'Титаник',
        isCorrect: false,
        comment:
          'Неверно. Хотя "Титаник" также оказал влияние на моду, "Клуэлесс" считается революционным в плане стиля.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 2,
        variant: 'Парк Юрского периода',
        isCorrect: false,
        comment: 'Неправильный ответ. "Клуэлесс" внес больший вклад в моду 1990-х.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 2,
        variant: 'Клуэлесс',
        isCorrect: true,
        comment: 'Верно! "Клуэлесс" стал иконой моды 1990-х.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 2,
        variant: 'Матрица',
        isCorrect: false,
        comment:
          'Неверно. "Матрица" повлияла на многие аспекты культуры, но "Клуэлесс" стал иконой моды 1990-х.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 2,
        variant: 'Форрест Гамп',
        isCorrect: false,
        comment: 'Неправильно. "Клуэлесс" имел большее влияние на модные тенденции 1990-х.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        quizId: 3,
        variant: 'Мэрил Стрип',
        isCorrect: false,
        comment:
          'Неверно. Мэрил Стрип играла роль редактора модного журнала, но фраза принадлежит Анн Хэтэуэй.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 3,
        variant: 'Эмили Блант',
        isCorrect: false,
        comment: 'Неправильный ответ. Фразу произнесла ее коллега по фильму Анн Хэтэуэй.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 3,
        variant: 'Скарлетт Йоханссон',
        isCorrect: false,
        comment: 'Неверно. Анн Хэтэуэй была той, кто произнес эту фразу в "Дьяволе носит Prada".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 3,
        variant: 'Анн Хэтэуэй',
        isCorrect: true,
        comment: 'Верно! Анн Хэтэуэй сыграла роль, где ей "нужно было больше гардероба".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 3,
        variant: 'Сандра Буллок',
        isCorrect: false,
        comment: 'Неправильно. В "Дьяволе носит Prada" эту знаменитую фразу сказала Анн Хэтэуэй.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 4,
        variant: 'Жан-Поль Готье',
        isCorrect: false,
        comment:
          'Неверно. Жан-Поль Готье известен своими работами, но наряды "Матрицы" создал Кирилл Гаскарелли.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 4,
        variant: 'Вивьен Вествуд',
        isCorrect: false,
        comment: 'Неправильный ответ. Наряды для "Матрицы" разработал Кирилл Гаскарелли.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 4,
        variant: 'Том Форд',
        isCorrect: false,
        comment: 'Неверно. За костюмы "Матрицы" отвечал Кирилл Гаскарелли.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 4,
        variant: 'Кирилл Гаскарелли',
        isCorrect: true,
        comment: 'Верно! Кирилл Гаскарелли ответственен за наряды в "Матрице".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 4,
        variant: 'Миучча Прада',
        isCorrect: false,
        comment: 'Неправильно. Ответ - Кирилл Гаскарелли, он создал наряды для "Матрицы".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 5,
        variant: 'Римские каникулы',
        isCorrect: false,
        comment:
          'Неверно. Хотя Одри Хепберн и в "Римских каникулах" была стильной, на моду шляп влияние оказал "Сабрина".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 5,
        variant: 'Сабрина',
        isCorrect: true,
        comment:
          'Верно! "Сабрина" оказал значительное влияние на моду женских шляп в 1950-х годах.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 5,
        variant: 'Завтрак у Тиффани',
        isCorrect: false,
        comment: 'Неправильный ответ. Фильм "Сабрина" оказал влияние на моду женских шляп.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 5,
        variant: 'Моя прекрасная леди',
        isCorrect: false,
        comment: 'Неверно. "Сабрина" была фильмом, оказавшим влияние на моду шляп.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 5,
        variant: 'Фанни Фейс',
        isCorrect: false,
        comment: 'Неправильно. Влияние на моду женских шляп оказал фильм "Сабрина".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 6,
        variant: 'Гладиатор',
        isCorrect: false,
        comment: 'Неверно. "Гладиатор" больше повлиял на интерес к историческим костюмам.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 6,
        variant: 'Бойцовский клуб',
        isCorrect: false,
        comment: 'Неправильно. "Бойцовский клуб" повлиял на мужскую моду, но не в контексте ретро.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 6,
        variant: 'Матрица',
        isCorrect: false,
        comment: 'Нет, "Матрица" знаменита своим влиянием на киберпанк и готическую моду.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 6,
        variant: 'Властелин колец',
        isCorrect: false,
        comment: 'Ошибка, "Властелин колец" вдохновил интерес к фэнтезийным костюмам.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 6,
        variant: 'Мулен Руж',
        isCorrect: true,
        comment: 'Верно! "Мулен Руж" вдохновил возрождение интереса к ретро моде.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 7,
        variant: 'Леонардо ДиКаприо',
        isCorrect: false,
        comment: 'Неверно, несмотря на его роли в других иконических фильмах 2000-х.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 7,
        variant: 'Том Круз',
        isCorrect: false,
        comment:
          'Неправильно. Том Круз известен многими ролями, но не стал иконой стиля из-за "Бойцовского клуба".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 7,
        variant: 'Брэд Питт',
        isCorrect: true,
        comment: 'Верно! Брэд Питт стал иконой стиля после "Бойцовского клуба".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 7,
        variant: 'Джонни Депп',
        isCorrect: false,
        comment: 'Нет, Джонни Депп стал иконой стиля благодаря другим ролям.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 7,
        variant: 'Киану Ривз',
        isCorrect: false,
        comment: 'Ошибка, Киану Ривз ассоциируется с "Матрицей", а не с "Бойцовским клубом".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        quizId: 8,
        variant: 'Черное пальто',
        isCorrect: true,
        comment: 'Верно! Черное пальто стало символом "Матрицы".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 8,
        variant: 'Кожаные брюки',
        isCorrect: false,
        comment: 'Неверно, хотя кожаные брюки тоже были популярны.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 8,
        variant: 'Солнцезащитные очки',
        isCorrect: false,
        comment: 'Неправильно, основным элементом было черное пальто.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 8,
        variant: 'Береты',
        isCorrect: false,
        comment: 'Береты не стали символом "Матрицы".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 8,
        variant: 'Банданы',
        isCorrect: false,
        comment: 'Ошибка, символом "Матрицы" стало черное пальто.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 9,
        variant: 'Топ Ган',
        isCorrect: true,
        comment: 'Верно! "Топ Ган" сделал популярными солнцезащитные очки "авиаторы".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 9,
        variant: 'Миссия невыполнима',
        isCorrect: false,
        comment: 'Неверно. "Миссия невыполнима" не ассоциируется с "авиаторами".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 9,
        variant: 'Матрица',
        isCorrect: false,
        comment: 'Неправильно, "Матрица" прославилась другими аксессуарами.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 9,
        variant: 'Пираты Карибского моря',
        isCorrect: false,
        comment: 'Нет, "Пираты Карибского моря" не связаны с "авиаторами".',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 10,
        variant: 'Ван Хельсинг',
        isCorrect: true,
        comment:
          'Верно! "Ван Хельсинг" сыграл значительную роль в возрождении интереса к готической моде.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 10,
        variant: 'Пираты Карибского моря',
        isCorrect: false,
        comment:
          'Неверно. Хотя "Пираты Карибского моря" были популярны, они не оказали значительного влияния на готическую моду.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 10,
        variant: 'Гарри Поттер',
        isCorrect: false,
        comment:
          'Неправильно. "Гарри Поттер" способствовал популярности многих вещей, но не готической моды.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 10,
        variant: 'Сумерки',
        isCorrect: false,
        comment:
          'Нет, несмотря на популярность "Сумерек", их влияние на готическую моду не было столь значительным.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: 10,
        variant: 'Матрица',
        isCorrect: false,
        comment:
          'Ошибка. Хотя "Матрица" оказала влияние на многие аспекты культуры, готическая мода не в их числе.',
        createdAt: new Date(),
        updatedAt: new Date(),
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
