export type ModuleType = {
  id: number;
  name: string;
  courseId: number;
  order: number;
  videoURL: string;
  article: string;
};

export type CourseType = {
  id: number;
  title: string;
  description: string;
  authorId: number;
  startDate: Date;
  price: number;
  modules: ModuleType[];
};
