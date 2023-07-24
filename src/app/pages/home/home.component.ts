import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pageHeader: string = 'Angular All In One';
  option: number = 0;

  onClick(option: number) {
    this.option = option;

    if (option == 1 || 2 || 3 || 4) this.pageHeader = '';
    if (option == 0) this.pageHeader = 'Angular All In One';
  }
}
