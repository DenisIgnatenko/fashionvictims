export type CourseType = {
  id: number;
  title: string;
  authorId: number;
  duration?: number;
  description: string;
  startDate: string;
  price: number;
  CourseStyle: CourseStyleType;
  modules: ModuleType[];
};

export type AddCourseType = {
  authorId: string;
  title: HTMLInputElement;
  description: HTMLInputElement;
  price: HTMLInputElement;
  duration: HTMLInputElement;
  startDate: HTMLInputElement;
  editorData: HTMLInputElement | string;
  file: HTMLInputElement & { files: FileList };
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
  openPaymentModal: boolean | number;
};

export type ModuleType = {
  id: number;
  name: string;
  courseId: number;
  order: number;
  videoURL: string;
  article: string;
};

export type PurchasedCourseType ={
  courseId: number;
  userId: number;
}