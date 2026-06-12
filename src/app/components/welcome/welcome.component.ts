import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  topics = [
    { icon: '🧩', label: 'OOP', desc: 'Encapsulation, Inheritance, Polymorphism, Design Patterns' },
    { icon: '🌳', label: 'Data Structures & Algorithms', desc: 'Trees, Sorting, Dynamic Programming, Graph Theory' },
    { icon: '💻', label: 'Programming Fundamentals', desc: 'Memory, Pointers, Recursion, Processes & Threads' },
    { icon: '🔐', label: 'Information Security', desc: 'Cryptography, Attacks, CIA Triad, PKI' },
  ];

  rules = [
    { icon: '❓', text: '10 questions drawn randomly across all 4 topics' },
    { icon: '⏱️', text: '30 seconds per question — unanswered = skipped' },
    { icon: '✅', text: 'One correct answer per question' },
    { icon: '📊', text: 'Full breakdown and explanations at the end' },
  ];

  constructor(private router: Router, private quizService: QuizService) {}

  startQuiz() {
    this.quizService.startQuiz();
    this.router.navigate(['/quiz']);
  }
}
