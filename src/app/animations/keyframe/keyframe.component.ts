import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-keyframe',
  templateUrl: './keyframe.component.html',
  styleUrls: ['./keyframe.component.scss'],
  animations: [
    trigger('keyframeAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(200px)' })),
      transition('in <=> out', animate('1000ms ease-in-out', keyframes([
        style({ transform: 'translateX(0)', offset: 0 }),
        style({ transform: 'translateX(100px)', offset: 0.3 }),
        style({ transform: 'translateX(150px)', offset: 0.6 }),
        style({ transform: 'translateX(200px)', offset: 1.0 }),
      ]))),
    ]),
  ],
})
export class KeyframeComponent {
  keyframeAnimationState = 'in';

  toggleKeyframe() {
    this.keyframeAnimationState = this.keyframeAnimationState === 'in' ? 'out' : 'in';
  }
}
