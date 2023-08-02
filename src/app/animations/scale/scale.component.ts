import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss'],
  animations: [
    trigger('scale', [
      state('in', style({ transform: 'scale(1)' })),
      state('out', style({ transform: 'scale(0.5)' })),
      transition('in <=> out', animate('500ms ease-in-out')),
    ]),
  ],
})
export class ScaleComponent {
  scaleState = 'in';

  toggleScale() {
    this.scaleState = this.scaleState === 'in' ? 'out' : 'in';
  }
}
