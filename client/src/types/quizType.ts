export type QuizType = {
  id: number;
  question: string;
  moduleId: number;
  options: QuizOptionType[];
};

export type QuizOptionType = {
  id: number;
  variant: string;
  isCorrect: boolean;
  comment: string;
  quizId: number;
};

export type QuizStateType = {
  questions: QuizType[];
  selectedQuiz: QuizType | null;
  quizResults: QuizResultType[] | null;
  error: string | null;
  loading: boolean;
  openTest: boolean;
};

export type QuizResultType = {
  id: number;
  userId: number;
  moduleId: number;
  score: number;
};
