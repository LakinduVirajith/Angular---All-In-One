import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-flipping',
  templateUrl: './flipping.component.html',
  styleUrls: ['./flipping.component.scss'],
  animations: [
    trigger('flipAnimation', [
      state('front', style({ transform: 'perspective(600px) rotateY(0deg)' })),
      state('back', style({ transform: 'perspective(600px) rotateY(180deg)' })),
      transition('front => back', animate('500ms ease-in')),
      transition('back => front', animate('500ms ease-out')),
    ]),
  ],
})
export class FlippingComponent {
  flipAnimationState = 'front';

  toggleFlip() {
    this.flipAnimationState = this.flipAnimationState === 'front' ? 'back' : 'front';
  }
}
