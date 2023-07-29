import { Component } from '@angular/core';

@Component({
  selector: 'app-vc-post-list',
  templateUrl: './vc-post-list.component.html',
  styleUrls: ['./vc-post-list.component.scss']
})
export class VcPostListComponent {
  /* CHILD MESSAGE */
  message: string = 'Hello from Child!';

  changeMessage() {
    this.message = 'New message from Child!';
  }
}
