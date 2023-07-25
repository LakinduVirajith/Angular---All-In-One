import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent {
  formData: any;

  onSubmit(form: NgForm){
    console.log(form);
  }

  firstNameHandle(form: FormsModule){
    this.formData = form;
    console.log(this.formData.name + ": " + this.formData.viewModel);
  }

  emailHandle(form: FormsModule){
    this.formData = form;
    console.log(this.formData.name + ": " + this.formData.viewModel);
  }

  addressHadle(form: FormsModule){
    this.formData = form;
    console.log(this.formData.name + ": " + this.formData.viewModel);
  }
}
