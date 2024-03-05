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

export type AddCourseType = {
  authorId: string;
  title: HTMLInputElement;
  description: HTMLInputElement;
  price: HTMLInputElement;
  duration: HTMLInputElement;
  startDate: HTMLInputElement;
  editorData: HTMLInputElement | string;
  file: HTMLInputElement & { files: FileList };1
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
