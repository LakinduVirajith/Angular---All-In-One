import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.scss'],
  animations: [
    trigger('rotate', [
      state('in', style({ transform: 'rotate(0deg)' })),
      state('out', style({ transform: 'rotate(180deg)' })),
      transition('in <=> out', animate('500ms ease-in-out')),
    ]),
  ],
})
export class RotateComponent {
  rotateState = 'in';

  toggleRotate() {
    this.rotateState = this.rotateState === 'in' ? 'out' : 'in';
  }
}
