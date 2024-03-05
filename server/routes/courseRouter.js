const courseRouter = require('express').Router();
const upload = require('../utils/multer');

const {
  Course, CourseStyles, Module, PurchasedCourse,
} = require('../db/models');

courseRouter.route('/')
  .get(async (req, res) => {
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
    const {
      title, price, description, duration, startDate, authorId, bgColor,
    } = req.body;

    // eslint-disable-next-line max-len
    if (!(title && price && description && duration && startDate && authorId)) return res.sendStatus(401);
    const created = await Course.create({
      title, price, description, duration, startDate, authorId,
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
