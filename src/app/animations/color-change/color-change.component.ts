import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.scss'],
  animations: [
    trigger('colorChange', [
      state('in', style({ backgroundColor: '#ff8c00' })),
      state('out', style({ backgroundColor: '#002aff' })),
      transition('in <=> out', animate('500ms ease-in-out')),
    ]),
  ],
})
export class ColorChangeComponent {
  colorChangeState = 'in';

  toggleColor() {
    this.colorChangeState = this.colorChangeState === 'in' ? 'out' : 'in';
  }
}
