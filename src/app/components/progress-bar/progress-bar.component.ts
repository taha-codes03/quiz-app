import { Component, Input, OnChanges, OnDestroy, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges, OnDestroy {
  @Input() totalSeconds = 30;
  @Input() resetSignal = 0; // increment to reset timer
  @Output() timeExpired = new EventEmitter<void>();

  secondsLeft = 30;
  private intervalId: any;

  ngOnInit() { this.startTimer(); }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['resetSignal'] && !changes['resetSignal'].firstChange) {
      this.resetTimer();
    }
  }

  ngOnDestroy() { this.clearTimer(); }

  private startTimer() {
    this.secondsLeft = this.totalSeconds;
    this.clearTimer();
    this.intervalId = setInterval(() => {
      this.secondsLeft--;
      if (this.secondsLeft <= 0) {
        this.clearTimer();
        this.timeExpired.emit();
      }
    }, 1000);
  }

  private resetTimer() { this.startTimer(); }
  private clearTimer() { if (this.intervalId) clearInterval(this.intervalId); }

  get progressPercent(): number {
    return (this.secondsLeft / this.totalSeconds) * 100;
  }

  get urgency(): string {
    if (this.secondsLeft <= 5) return 'critical';
    if (this.secondsLeft <= 10) return 'warning';
    return 'normal';
  }
}
