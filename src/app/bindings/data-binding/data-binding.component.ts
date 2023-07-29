import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  /* STRING INTERPOLATION */
  message: string = 'string interpolation';

  /* PROPERTY BINDING */
  imgUrl: string = '/assets/property-binding.jpg';
  isDisabled: boolean = true;

  /* CLASS BINDING */
  bool: boolean = true;
  classBinding() {
    this.bool = !this.bool;
  }

  /* STYLE BINDING */
  boolClass: boolean = false;
  styleBinding() {
    this.boolClass = !this.boolClass;
  }

  /* TEMPLATE VARIABLE */
  variable!: string;
  onKeyup(username: string) {
    this.variable = username;
  }
}
