import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.scss'],
})
export class NgSwitchCaseComponent {
  stepForm!: number;

  onClick(status: number) {
    this.stepForm = status;
    console.log(this.stepForm);
  }
}
