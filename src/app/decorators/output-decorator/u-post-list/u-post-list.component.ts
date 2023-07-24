import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-u-post-list',
  templateUrl: './u-post-list.component.html',
  styleUrls: ['./u-post-list.component.scss'],
})
export class UPostListComponent {
  /* child message */
  childMessage: string = 'message from post-list child to post parent';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.childMessage);
  }
}
