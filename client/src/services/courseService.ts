import type { AxiosInstance } from 'axios';
import type { CourseType, PurchasedCourseType } from '../types/courseType';
import axiosInstance from './apiInstance';

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

  public addCourse(data: FormData): Promise<CourseType> {
    return this.api.post<Promise<CourseType>>('/courses', data).then((res) => res.data);
  }
}

export default new CourseService(axiosInstance);
