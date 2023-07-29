import { Component } from '@angular/core';

@Component({
  selector: 'app-u-post',
  templateUrl: './u-post.component.html',
  styleUrls: ['./u-post.component.scss'],
})
export class UPostComponent {
  /* GET CHILD MESSAGE */
  childMessage!: string;
  getChildMessage(event: any) {
    console.log(event);
    this.childMessage = event;
  }
}
