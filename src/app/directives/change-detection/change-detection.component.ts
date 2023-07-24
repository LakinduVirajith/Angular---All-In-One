import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
})
export class ChangeDetectionComponent {
  /* change detection */
  postArray: Array<string> = ['post 1', 'post 2', 'post 3'];
  postValue: number = 3;

  addPost() {
    this.postValue++;
    this.postArray.push('post ' + this.postValue);
  }

  removePost() {
    this.postArray.pop();
    this.postValue--;
  }

  deletePost(post: any) {
    let index = this.postArray.indexOf(post);
    this.postArray.splice(index, 1);
  }

  /* usage of array index */
  index!: number;
  getIndex(index: any) {
    this.index = index;
    console.log(index);
  }
}
