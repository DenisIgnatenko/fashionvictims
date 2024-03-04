const courseRouter = require('express').Router();
const { Course, CourseStyles} = require('../db/models');

 courseRouter.route('/courses')
  .get(async (req, res) => {
    try {
        const courses = await Course.findAll( {include: CourseStyles});
        res.json(courses)
    } catch (error) {
        console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  })

  module.exports = courseRouter;