import type { AxiosInstance } from 'axios';
import type { QuizType } from '../types/quizType';
import axiosInstance from './apiInstance';

class QuizService {
  constructor(private readonly api: AxiosInstance) {}

  async getQuizzes(moduleId: number) {
    return this.api.get<QuizType[]>(`/quizzes/${moduleId}`);
  }

  async saveQuizResult(userId: number, moduleId: number, score: number) {
    return this.api.post('/quizzes/quizresults', { userId, moduleId, score });
  }

  async getQuizResultsByUserId(userId: number) {
    return this.api.get(`/quizzes/quizresults/${userId}`);
  }
}

export default new QuizService(axiosInstance);
