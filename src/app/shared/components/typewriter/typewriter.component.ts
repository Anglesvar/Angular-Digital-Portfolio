import { Component, OnInit, OnDestroy, input, signal } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.scss'
})
export class TypewriterComponent implements OnInit, OnDestroy {
  text  = input.required<string>();
  speed = input<number>(55);

  displayed = signal('');
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    let i = 0;
    this.interval = setInterval(() => {
      this.displayed.set(this.text().slice(0, i + 1));
      i++;
      if (i >= this.text().length) clearInterval(this.interval);
    }, this.speed());
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
