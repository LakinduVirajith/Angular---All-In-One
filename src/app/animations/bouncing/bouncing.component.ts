import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-bouncing',
  templateUrl: './bouncing.component.html',
  styleUrls: ['./bouncing.component.scss'],
  animations: [
    trigger('bounceAnimation', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => in', [
        animate('1000ms', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-30px)', offset: 0.3 }),
          style({ transform: 'translateY(0)', offset: 0.6 }),
          style({ transform: 'translateY(-15px)', offset: 0.8 }),
          style({ transform: 'translateY(0)', offset: 1.0 }),
        ]))
      ]),
    ]),
  ],
})
export class BouncingComponent {
  bounceAnimationState = 'in';

  toggleBounce() {
    this.bounceAnimationState = this.bounceAnimationState === 'in' ? 'out' : 'in';
  }
}
