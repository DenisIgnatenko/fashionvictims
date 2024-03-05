const courseRouter = require('express').Router();

const upload = require('../utils/multer');
const { Course, CourseStyles } = require('../db/models');

courseRouter.route('/courses')
  .get(async (req, res) => {
    try {
      const courses = await Course.findAll({ include: CourseStyles });
      res.json(courses);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

courseRouter.post('/courses', upload.single('img'), async (req, res) => {
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
