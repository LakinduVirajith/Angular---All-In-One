import { Component } from '@angular/core';

@Component({
  selector: 'app-i-post',
  templateUrl: './i-post.component.html',
  styleUrls: ['./i-post.component.scss'],
})
export class IPostComponent {
  /* PARENT MESSAGE */
  fromParent: string = 'message from post parent to post-list child';
}
