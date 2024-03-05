const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routes/tokensRouter');
const userRouter = require('./routes/userRouter');
const quizRouter = require('./routes/quizRouter');
const courseRouter = require('./routes/courseRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/auth', userRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/courses', courseRouter);
app.use('/api/quizzes', quizRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
