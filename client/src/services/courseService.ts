import type { AxiosInstance } from 'axios';
import type { CourseType } from '../types/courseType';
import axiosInstance from './apiInstance';

class CourseService {
  constructor(private readonly api: AxiosInstance) { }


  async getPurchasedCourses(userId: number): Promise<CourseType[]> {
    const response = await this.api.get<CourseType[]>(`/courses/users/${userId}/purchasedcourses`);
    return response.data;
    }

  public getCourses(): Promise<CourseType[]> {
    return this.api.get<Promise<CourseType[]>>('/courses').then((res) => res.data);
  }

  public addCourse(data: FormData): Promise<CourseType> {
    return this.api.post<Promise<CourseType>>('/courses', data). then((res) => res.data)
  }
}

export default new CourseService(axiosInstance);
