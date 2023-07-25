import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from 'src/app/validators/noSpace.validators';

@Component({
  selector: 'app-form-with-custom-validations',
  templateUrl: './form-with-custom-validations.component.html',
  styleUrls: ['./form-with-custom-validations.component.scss']
})
export class FormWithCustomValidationsComponent {
  form: any;

  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6), noSpace.noSpaceValidations]]
    })
  }

  get fc(){
    return this.form.controls;
  }
}
