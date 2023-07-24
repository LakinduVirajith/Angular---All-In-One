import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent {
  /* binding to event */
  clickBinding!: string;
  clickBindingHandle() {
    this.clickBinding = 'click event binding worked successfully!';
  }

  /* binding to keyboard event */
  keyboardEvent: string = '';
  onKeydown($event: any) {
    this.keyboardEvent = 'keyboard event binding worked successfully!';
  }

  view: boolean = false;
  viewList() {
    this.view = !this.view;
  }
}
