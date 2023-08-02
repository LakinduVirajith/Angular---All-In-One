import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-slide-in-and-out',
  templateUrl: './slide-in-and-out.component.html',
  styleUrls: ['./slide-in-and-out.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out')
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ]),
    ]),
  ],
})
export class SlideInAndOutComponent {
  slideInOutState = 'in';

  toggleSlide() {
    this.slideInOutState = this.slideInOutState === 'in' ? 'out' : 'in';
  }
}
