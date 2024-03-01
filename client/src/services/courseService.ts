import type { CourseType } from '../types/courseType';
import type { AxiosInstance } from 'axios';
import axiosInstance from './apiInstance';

class CourseService {
  constructor(private readonly api: AxiosInstance) {}
  public getCourses(): Promise<CourseType[]> {
    return this.api.get<Promise<CourseType[]>>('/courses').then((res) => res.data);
  }
}

export default new CourseService(axiosInstance);
