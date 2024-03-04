export type QuestionType = {
  id: number;
  testId: number;
  question: string;
  answer: string;
  points: number;
};

export type TestType = {
  id: number;
  userId: number;
  name: string;
  description: string;
  questions: QuestionType[];
};

export type TestsInitialStateType = {
  tests: TestType[];
  selected: TestType | null;
  testLoading: boolean;
  openTest: TestType | null;
};
