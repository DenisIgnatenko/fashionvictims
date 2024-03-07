/* eslint-disable no-unused-expressions */
/* eslint-disable no-await-in-loop */
const courseRouter = require('express').Router();
const upload = require('../utils/multer');

const {
  Course, CourseStyles, Module, PurchasedCourse, Quiz, QuizOption,
} = require('../db/models');

courseRouter.route('/').get(async (req, res) => {
  try {
    const courses = await Course.findAll({ include: CourseStyles });
    res.json(courses);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

courseRouter.post('/', upload.single('img'), async (req, res) => {
  try {
    const { title, price, description, duration, startDate, authorId, bgColor } = req.body;

    // eslint-disable-next-line max-len
    if (!(title && price && description && duration && startDate && authorId))
      return res.sendStatus(401);
    const created = await Course.create({
      title,
      price,
      description,
      duration,
      startDate,
      authorId,
    });
    const newStyle = await CourseStyles.create({
      bgColor,
      img: `/${req.file.filename}`,
      direction: 'left',
      courseId: created.id,
    });
    console.log(req.body);
    return res.json({ newStyle, created });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = courseRouter;

courseRouter.get('/users/:id/purchasedcourses', async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  console.log('req.params: ', req.params);

  try {
    const purchasedCourses = await PurchasedCourse.findAll({
      where: { userId },
      include: [
        {
          model: Course,
          as: 'Course',
          include: [
            {
              model: Module,
              as: 'Modules',
              order: ['order', 'ASC'],
            },
          ],
        },
      ],
    });

    console.log(purchasedCourses);

    const coursesData = purchasedCourses.map((purchasedCourse) => {
      const course = purchasedCourse.Course;
      return {
        id: course.id,
        title: course.title,
        description: course.description,
        duration: course.duration,
        authorId: course.authorId,
        startDate: course.startDate,
        price: course.price,
        modules: course.Modules.map((module) => ({
          id: module.id,
          name: module.name,
          courseId: module.courseId,
          order: module.order,
          videoURL: module.videoURL,
          article: module.article,
        })),
      };
    });

    res.json(coursesData);
  } catch (error) {
    console.error('Ошибка при получении купленных курсов:', error);
    res.status(500).json({ message: 'Ошибка сервера при получении купленных курсов' });
  }
});

// (alias) type QuestionType = {
//   questionText?: FormDataEntryValue | undefined;
//   answers: AnswerType[];
//   num?: number | undefined;
// }

// export type AnswerType = {
//   answer?: FormDataEntryValue;
//   comment?: FormDataEntryValue;
//   isCorrect?: FormDataEntryValue | boolean;
// }

courseRouter.post('/:id/module', async (req, res) => {
  try {
    const {
      questions, videoURL, name, article,
    } = req.body;
    const { id } = req.params;
    // console.log(questions, videoURL, name, article, id);
    const existingModules = await Module.findAll({ where: { courseId: id } });
    const currentOrder = existingModules.length + 1;
    const createdModule = (await Module.create({
      videoURL, name, article, order: currentOrder, courseId: id,
    })).dataValues;
    // console.log(questions, videoURL, name, article, id, createdModule);
    // console.log(createdModule);

    for (let i = 0; i < questions.length; i += 1) {
      const createdQuiz = (await Quiz.create({
        moduleId: createdModule.id, question: questions[i].questionText,
      })).dataValues;
      for (let j = 0; j < questions[i].answers.length; j += 1) {
        'isCorrect' in questions[i].answers[j]
          ? await QuizOption.create({
            variant: questions[i].answers[j].answer,
            comment: questions[i].answers[j].comment,
            isCorrect: true,
            quizId: createdQuiz.id,
          })
          : await QuizOption.create({
            variant: questions[i].answers[j].answer,
            comment: questions[i].answers[j].comment,
            quizId: createdQuiz.id,
          });
      }
    }
    res.sendStatus(200);
    // console.log(questions, videoURL, name, article, id, createdModule);
  } catch (error) {
    console.log(error);
  }
});

courseRouter.route('/users/:id/buycourse').post(async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const courseId = req.body.courseId;
  console.log(userId, courseId);
  try {
    const [addPurchasedCourse, created] = await PurchasedCourse.findOrCreate({
      where: { userId, courseId },
      defaults: { userId, courseId },
    });
    res.status(200).json({ addPurchasedCourse, created });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

courseRouter.route('/courses').get(async (req, res) => {
  try {
    const courses = await Course.findAll({ include: CourseStyles });
    res.json(courses);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = courseRouter;
