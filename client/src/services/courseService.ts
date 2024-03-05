import type { AxiosInstance } from 'axios';
import type { CourseType } from '../types/courseTypes';
import axiosInstance from './apiInstance';

class CourseService {
  constructor(private readonly api: AxiosInstance) {}

  async getPurchasedCourses(userId: number) {
    return this.api.get<CourseType[]>(`/courses/users/${userId}/purchasedcourses`);
  }
}

export default new CourseService(axiosInstance);
