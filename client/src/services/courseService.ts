import type { AxiosInstance } from 'axios';
import type { CourseType, PurchasedCourseType, ModuleType, QuestionType, CourseStyleType } from '../types/courseType';
import axiosInstance from './apiInstance';
import type { AddModuleType } from '../redux/thunkActions/courseThunkActions';


class CourseService {
  constructor(private readonly api: AxiosInstance) {}

  async getPurchasedCourses(userId: number): Promise<CourseType[]> {
    const response = await this.api.get<CourseType[]>(`/courses/users/${userId}/purchasedcourses`);
    return response.data;
  }
  public addPurchasedCourse(data: {
    userId: number;
    courseId: number;
  }): Promise<PurchasedCourseType> {
    
    return this.api
      .post<PurchasedCourseType>(`/courses/users/${data.userId}/buycourse`, data)
      .then((res) => res.data)
      .catch((error) => {
        console.error('Ошибка при добавлении курса:', error);
        throw error; // Переброс ошибки для дальнейшей обработки
      });
  }

  public getCourses(): Promise<CourseType[]> {
    return this.api.get<Promise<CourseType[]>>('/courses').then((res) => res.data);
  }

  public addCourse(data: FormData): Promise<{ created: CourseType, newStyle: CourseStyleType }> {
    return this.api.post<Promise<{ created: CourseType, newStyle: CourseStyleType }>>('/courses', data).then((res) => res.data)
  }

  public addModule({ questions, videoURL, name, article: editorData, id }: AddModuleType): Promise<{ created: object }> {
    return this.api.post<Promise<{ created: object }>>(`/courses/${id}/module`, {questions, videoURL, name, article: editorData}).then((res) => res.data)
  }


}

export default new CourseService(axiosInstance);
