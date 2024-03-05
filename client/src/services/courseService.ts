import type { AxiosInstance } from 'axios';
import type { CourseType } from '../types/courseType';
import axiosInstance from './apiInstance';

class CourseService {
  constructor(private readonly api: AxiosInstance) { }

  public getCourses(): Promise<CourseType[]> {
    return this.api.get<Promise<CourseType[]>>('/courses').then((res) => res.data);
  }

  public addCourse(data: Omit<CourseType, 'id'>): Promise<CourseType> {
    return this.api.post<Promise<CourseType>>('/courses', data). then((res) => res.data)
  }
}

export default new CourseService(axiosInstance);
