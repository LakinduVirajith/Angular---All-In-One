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

    if (option == 1) this.pageHeader = 'Angular Decorators';
    if (option == 2) this.pageHeader = 'Angular Bindings';
    if (option == 3) this.pageHeader = 'Angular Directives';
    if (option == 4) this.pageHeader = 'Angular Forms';
    if (option == 0) this.pageHeader = 'Angular All In One';
  }
}
