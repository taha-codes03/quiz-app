# 🧠 CS QuizLab — Angular Quiz Application

University-level quiz covering OOP, DSA, Programming Fundamentals, and Information Security.

---

## 🚀 Setup

```bash
cd quiz-app
npm install
npm start
# → Open http://localhost:4200
```

---

## 📁 File Structure

```
quiz-app/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── quiz.model.ts              ← Interfaces + 40 university questions
│   │   ├── services/
│   │   │   └── quiz.service.ts            ← State management (BehaviorSubject)
│   │   ├── components/
│   │   │   ├── welcome/                   ← Start screen, topic overview
│   │   │   ├── quiz/                      ← Question + options + timer
│   │   │   ├── progress-bar/              ← Circular countdown timer
│   │   │   └── result/                    ← Score, breakdown, answer review
│   │   ├── app.routes.ts                  ← Angular Router lazy-loaded routes
│   │   ├── app.component.ts               ← Root shell (router-outlet)
│   │   └── app.config.ts                  ← provideRouter setup
│   ├── styles.css                         ← Global dark theme
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
└── tsconfig.json
```

---

## ✨ Features

| Feature              | Details                                                                 |
| -------------------- | ----------------------------------------------------------------------- |
| **40 Questions**     | 10 OOP · 10 DSA · 10 Programming Fundamentals · 10 Information Security |
| **Random selection** | 10 questions shuffled from all topics each run                          |
| **30-second timer**  | Circular SVG countdown; auto-advances on timeout                        |
| **Instant feedback** | Correct/wrong highlight + explanation after each answer                 |
| **Track bar**        | Visual dot trail showing correct/wrong/skipped per question             |
| **Result screen**    | Grade, score %, time taken, topic breakdown bars                        |
| **Answer review**    | Full Q&A review with explanations, expandable                           |
| **Angular Routing**  | Lazy-loaded standalone components via Router                            |

---

## 🎯 Angular Concepts Used

- **Standalone Components** with lazy loading via Router
- **Angular Router** (provideRouter, loadComponent)
- **Service + BehaviorSubject** for reactive state management
- **@Input / @Output / EventEmitter** for component communication
- **OnChanges / OnDestroy** lifecycle hooks (timer component)
- **Event binding** `(click)`, `(timeExpired)`
- **Class binding** `[class]` for dynamic option states
- **ngFor / ngIf** directives throughout

---
