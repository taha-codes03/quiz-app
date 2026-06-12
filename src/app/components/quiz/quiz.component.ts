import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuizService } from '../../services/quiz.service';
import { QuizState, Question } from '../../models/quiz.model';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {
  state!: QuizState;
  selectedOptionIndex: number | null = null;
  isAnswered = false;
  timerReset = 0;
  showFeedback = false;
  private sub!: Subscription;

  readonly optionLabels = ['A', 'B', 'C', 'D'];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.sub = this.quizService.state$.subscribe(s => {
      if (!s.questions.length) { this.router.navigate(['/welcome']); return; }
      if (s.isFinished) { this.router.navigate(['/result']); return; }
      this.state = s;
    });
  }

  ngOnDestroy() { this.sub?.unsubscribe(); }

  get currentQuestion(): Question {
    return this.state.questions[this.state.currentIndex];
  }

  get progressPercent(): number {
    return ((this.state.currentIndex) / this.state.questions.length) * 100;
  }

  get isLastQuestion(): boolean {
    return this.state.currentIndex === this.state.questions.length - 1;
  }

  selectOption(index: number) {
    if (this.isAnswered) return;
    this.selectedOptionIndex = index;
    this.isAnswered = true;
    this.showFeedback = true;
    this.quizService.submitAnswer(index);
  }

  nextQuestion() {
    this.selectedOptionIndex = null;
    this.isAnswered = false;
    this.showFeedback = false;
    this.timerReset++;
    this.quizService.nextQuestion();
  }

  onTimeExpired() {
    if (!this.isAnswered) {
      this.isAnswered = true;
      this.showFeedback = true;
      // No answer submitted — null remains
    }
    setTimeout(() => this.nextQuestion(), 1200);
  }

  getOptionClass(idx: number): string {
    if (!this.showFeedback) {
      return this.selectedOptionIndex === idx ? 'option selected' : 'option';
    }
    if (idx === this.currentQuestion.correctIndex) return 'option correct';
    if (idx === this.selectedOptionIndex && idx !== this.currentQuestion.correctIndex) return 'option wrong';
    return 'option dimmed';
  }

  getTopicColor(topic: string): string {
    const map: Record<string, string> = {
      'OOP': '#818cf8',
      'DSA': '#34d399',
      'Programming Fundamentals': '#f59e0b',
      'Information Security': '#f43f5e'
    };
    return map[topic] || '#94a3b8';
  }
}
