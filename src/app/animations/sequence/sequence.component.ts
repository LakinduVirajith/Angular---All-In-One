import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, sequence } from '@angular/animations';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss'],
  animations: [
    trigger('sequenceAnimation', [
      state('start', style({ opacity: 0 })),
      transition('start => *', sequence([
        animate('1000ms', style({ opacity: 1 })),
        animate('1000ms', style({ transform: 'translateX(200px)' })),
        animate('1000ms', style({ backgroundColor: '#f00' })),
      ])),
    ]),
  ],
})
export class SequenceComponent {
  animationState = 'start';

  startAnimation() {
    this.animationState = 'animate';
  }
}
