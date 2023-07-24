import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  /* string interpolation */
  message: string = 'string interpolation';

  /* property binding */
  imgUrl: string = '/assets/property-binding.jpg';

  /* class binding */
  bool: boolean = true;
  classBinding() {
    this.bool = !this.bool;
  }

  /* style binding */
  boolClass: boolean = false;
  styleBinding() {
    this.boolClass = !this.boolClass;
  }

  /* template variable */
  variable!: string;
  onKeyup(username: string) {
    this.variable = username;
  }
}
