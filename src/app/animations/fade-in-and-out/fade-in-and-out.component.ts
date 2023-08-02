import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-fade-in-and-out',
  templateUrl: './fade-in-and-out.component.html',
  styleUrls: ['./fade-in-and-out.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      state('out', style({opacity: 0})),
      transition('in <=> out', animate('500ms ease-in-out')),
    ]),
  ],
})
export class FadeInAndOutComponent {
  fadeInOutState = 'in';

  toggleFade(){
    this.fadeInOutState = this.fadeInOutState === 'in' ? 'out' : 'in';
  }
}
