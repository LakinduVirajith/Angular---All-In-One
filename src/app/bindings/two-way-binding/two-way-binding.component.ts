import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent {
  /* TWO-WAY DATA BINDING */
  userName!: string;
  password!: string;

  /* EXERCISE */
  bool: boolean = false;
  viewExercise() {
    this.bool = !this.bool;
  }

  check: boolean = false;
  checkBox() {
    this.check = !this.check;
    console.log(this.check);
  }

  postTitel!: string;
  postDetails!: string;
  postImage!: string;
  postURL!: string;
}
