import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('out => in', animate('500ms ease-in')),
    ]),
  ],
})
export class ScrollComponent {
  isInView = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = document.querySelector('.container');
    if (element) {
      const rect = element.getBoundingClientRect();
      this.isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
    }
  }
}
