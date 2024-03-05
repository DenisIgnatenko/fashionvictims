export type CourseType = {
  id: number;
  title: string;
  authorId: number;
  duration?: number;
  description: string;
  startDate: string;
  price: number;
  CourseStyle?: CourseStyleType;
  modules?: ModuleType[];
};
export type CourseStyleType = {
  bgColor: string;
  img: string;
  direction: string;
  courseId: number;
};

export type AllCoursesType = {
  course: CourseType[];
  purchasedCourses: CourseType[];
  loading: boolean;
  error: string | null;
  availableModules: Record<number, boolean>;
};

export type ModuleType = {
  id: number;
  name: string;
  courseId: number;
  order: number;
  videoURL: string;
  article: string;
};
