import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent {
  /* BINDING TO EVENT */
  clickBinding!: string;
  clickBindingHandle() {
    this.clickBinding = 'click event binding worked successfully!';
  }

  /* BINDING TO KEYBOARD EVENET */
  keyboardEvent: string = '';
  onKeydown($event: any) {
    this.keyboardEvent = 'keyboard event binding worked successfully!';
  }

  view: boolean = false;
  viewList() {
    this.view = !this.view;
  }
}
