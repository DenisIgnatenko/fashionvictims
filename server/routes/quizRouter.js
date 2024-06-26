const quizRouter = require('express').Router();
const { Quiz, QuizOption, QuizResult } = require('../db/models');

quizRouter.route('/:moduleId').get(async (req, res) => {
  try {
    const { moduleId } = req.params;
    const quizzes = await Quiz.findAll({
      where: { moduleId },
      include: [{ model: QuizOption, as: 'options' }],
    });
    res.json(quizzes);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

quizRouter.route('/quizresults').post(async (req, res) => {
  try {
    const { userId, moduleId, score } = req.body;
    const [quizResult] = await QuizResult.findOrCreate({
      where: {
        userId,
        moduleId,
      },
      defaults: {
        score,
      },
    });

    res.json(quizResult);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

quizRouter.route('/quizresults/:userId').get(async (req, res) => {
  try {
    const { userId } = req.params;
    const results = await QuizResult.findAll({ where: { userId } });
    console.log(results);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

module.exports = quizRouter;
