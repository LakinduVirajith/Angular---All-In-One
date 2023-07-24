import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-i-post-list',
  templateUrl: './i-post-list.component.html',
  styleUrls: ['./i-post-list.component.scss'],
})
export class IPostListComponent {
  /* get parent message */
  @Input() fromPost!: string;
}
