import type { AxiosInstance } from 'axios';
import type { CourseType } from '../types/courseType';
import axiosInstance from './apiInstance';

class CourseService {
  constructor(private readonly api: AxiosInstance) {}

  async getPurchasedCourses(userId: number): Promise<CourseType[]> {
    return this.api.get<CourseType[]>(`/courses/users/${userId}/purchasedcourses`);
  }

  public getCourses(): Promise<CourseType[]> {
    return this.api.get<Promise<CourseType[]>>('/courses').then((res) => res.data);
  }
}

export default new CourseService(axiosInstance);
