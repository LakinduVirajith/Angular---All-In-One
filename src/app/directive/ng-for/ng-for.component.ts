import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  postArray: Array<string> = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5'];
  objArray: Array<any> = [
    { id: 1, postTitle: 'post 1' },
    { id: 2, postTitle: 'post 2' },
    { id: 3, postTitle: 'post 3' },
    { id: 4, postTitle: 'post 4' },
    { id: 5, postTitle: 'post 5' },
  ];
}
