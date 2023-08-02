import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  animations: [
    trigger('groupAnimation', [
      state('start', style({ opacity: 0 })),
      transition('start => *', group([
        animate('1000ms', style({ opacity: 1 })),
        animate('1000ms', style({ transform: 'translateX(200px)' })),
        animate('1000ms', style({ backgroundColor: '#f00' })),
      ])),
    ]),
  ],
})
export class GroupComponent {
  animationState = 'start';

  startAnimation() {
    this.animationState = 'animate';
  }
}
