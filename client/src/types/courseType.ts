export type CourseType = {
  id: number;
  title: string;
  authorId: number;
  duration: number;
  description: string;
  startDate: string;
  price: number;
  CourseStyle: CourseStyleType;
};
export type CourseStyleType = {
  bgColor: string;
  img: string;
  direction: string;
  courseId: number;
};

export type AllCoursesType = {
  course: CourseType[];
};
