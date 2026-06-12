import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { QuizResult } from '../../models/quiz.model';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result!: QuizResult;
  showAnswers = false;
  readonly optionLabels = ['A', 'B', 'C', 'D'];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    const state = this.quizService.getCurrentState();
    if (!state.questions.length) { this.router.navigate(['/welcome']); return; }
    this.result = this.quizService.getResult();
  }

  get percentage(): number {
    return Math.round((this.result.score / this.result.total) * 100);
  }

  get grade(): { label: string; emoji: string; color: string; message: string } {
    const p = this.percentage;
    if (p === 100) return { label: 'Perfect', emoji: '🏆', color: '#f59e0b', message: 'Exceptional! A flawless performance.' };
    if (p >= 80) return { label: 'Excellent', emoji: '🌟', color: '#10b981', message: 'Outstanding command of the material.' };
    if (p >= 70) return { label: 'Good', emoji: '👍', color: '#06b6d4', message: 'Solid understanding with room to refine.' };
    if (p >= 50) return { label: 'Pass', emoji: '📘', color: '#818cf8', message: 'Passing grade — revisit the weaker topics.' };
    return { label: 'Needs Work', emoji: '📖', color: '#ef4444', message: 'Review the material and try again.' };
  }

  get formattedTime(): string {
    const m = Math.floor(this.result.timeTaken / 60);
    const s = this.result.timeTaken % 60;
    return m > 0 ? `${m}m ${s}s` : `${s}s`;
  }

  getTopicColor(topic: string): string {
    const map: Record<string, string> = {
      'OOP': '#818cf8', 'DSA': '#34d399',
      'Programming Fundamentals': '#f59e0b', 'Information Security': '#f43f5e'
    };
    return map[topic] || '#94a3b8';
  }

  restart() {
    this.quizService.startQuiz();
    this.router.navigate(['/quiz']);
  }

  home() {
    this.quizService.resetQuiz();
    this.router.navigate(['/welcome']);
  }
}
