import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss'],
})
export class NgIfComponent {
  postValue: number = 0;
  arrayObj: Array<any> = [];
  postValueTem: number = 0;
  arrayObjTem: Array<any> = [];

  addPost() {
    this.postValue++;
    this.arrayObj.push('post ' + this.postValue);
  }
  removePost() {
    this.arrayObj.pop();
    this.postValue--;
  }

  addPostTem() {
    this.postValueTem++;
    this.arrayObjTem.push('post ' + this.postValueTem);
  }
  removePostTem() {
    this.arrayObjTem.pop();
    this.postValueTem--;
  }
}
