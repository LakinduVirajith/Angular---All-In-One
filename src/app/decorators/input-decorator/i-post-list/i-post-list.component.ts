import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-i-post-list',
  templateUrl: './i-post-list.component.html',
  styleUrls: ['./i-post-list.component.scss'],
})
export class IPostListComponent {
  /* GET PARENT MESSAGE */
  @Input() fromPost!: string;
}
