const courseRouter = require('express').Router();

const { Course, Module, PurchasedCourse } = require('../db/models');

courseRouter.get('/users/:id/purchasedcourses', async (req, res) => {
  const userId = parseInt(req.params.id, 10);

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
            },
          ],
        },
      ],
    });

    const coursesData = purchasedCourses.map((purchasedCourse) => {
      const course = purchasedCourse.Course; // Ссылка на связанный курс
      return {
        id: course.id,
        title: course.title,
        description: course.description,
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

module.exports = courseRouter;
