import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question, QuizState, QuizResult, Topic, ALL_QUESTIONS } from '../models/quiz.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly QUIZ_SIZE = 10;
  private readonly TIME_PER_QUESTION = 30;

  private state: QuizState = this.getInitialState();
  private stateSubject = new BehaviorSubject<QuizState>(this.state);
  state$ = this.stateSubject.asObservable();

  private getInitialState(): QuizState {
    return {
      questions: [],
      currentIndex: 0,
      selectedAnswers: [],
      timePerQuestion: 30,
      score: 0,
      isFinished: false,
      startTime: null
    };
  }

  startQuiz(): void {
    const questions = this.selectRandomQuestions();
    this.state = {
      questions,
      currentIndex: 0,
      selectedAnswers: new Array(this.QUIZ_SIZE).fill(null),
      timePerQuestion: this.TIME_PER_QUESTION,
      score: 0,
      isFinished: false,
      startTime: new Date()
    };
    this.stateSubject.next({ ...this.state });
  }

  private selectRandomQuestions(): Question[] {
    const topics: Topic[] = ['OOP', 'DSA', 'Programming Fundamentals', 'Information Security'];
    const selected: Question[] = [];

    // Pick 2-3 from each topic randomly to fill 10 total
    const topicPools = topics.map(t => this.shuffle(ALL_QUESTIONS.filter(q => q.topic === t)));
    const counts = [3, 3, 2, 2]; // OOP: 3, DSA: 3, PF: 2, IS: 2 — then shuffle
    const shuffledCounts = this.shuffle(counts);

    topicPools.forEach((pool, i) => {
      selected.push(...pool.slice(0, shuffledCounts[i]));
    });

    return this.shuffle(selected).slice(0, this.QUIZ_SIZE);
  }

  private shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  submitAnswer(answerIndex: number): void {
    const answers = [...this.state.selectedAnswers];
    answers[this.state.currentIndex] = answerIndex;
    this.state = { ...this.state, selectedAnswers: answers };
    this.stateSubject.next({ ...this.state });
  }

  nextQuestion(): void {
    if (this.state.currentIndex < this.QUIZ_SIZE - 1) {
      this.state = { ...this.state, currentIndex: this.state.currentIndex + 1 };
    } else {
      this.finishQuiz();
    }
    this.stateSubject.next({ ...this.state });
  }

  timeExpired(): void {
    this.nextQuestion();
  }

  finishQuiz(): void {
    let score = 0;
    this.state.questions.forEach((q, i) => {
      if (this.state.selectedAnswers[i] === q.correctIndex) score++;
    });
    this.state = { ...this.state, score, isFinished: true };
    this.stateSubject.next({ ...this.state });
  }

  getResult(): QuizResult {
    const topics: Topic[] = ['OOP', 'DSA', 'Programming Fundamentals', 'Information Security'];
    const timeTaken = this.state.startTime
      ? Math.round((Date.now() - this.state.startTime.getTime()) / 1000)
      : 0;

    const breakdown = topics.map(topic => {
      const topicQs = this.state.questions.filter(q => q.topic === topic);
      const correct = topicQs.filter((q, _) => {
        const idx = this.state.questions.indexOf(q);
        return this.state.selectedAnswers[idx] === q.correctIndex;
      }).length;
      return { topic, correct, total: topicQs.length };
    }).filter(b => b.total > 0);

    const answers = this.state.questions.map((q, i) => ({
      question: q,
      selected: this.state.selectedAnswers[i],
      correct: this.state.selectedAnswers[i] === q.correctIndex
    }));

    return {
      score: this.state.score,
      total: this.QUIZ_SIZE,
      timeTaken,
      breakdown,
      answers
    };
  }

  getCurrentState(): QuizState {
    return { ...this.state };
  }

  resetQuiz(): void {
    this.state = this.getInitialState();
    this.stateSubject.next({ ...this.state });
  }
}
