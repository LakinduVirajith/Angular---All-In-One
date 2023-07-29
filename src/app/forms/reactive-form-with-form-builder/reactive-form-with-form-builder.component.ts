import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-form-builder',
  templateUrl: './reactive-form-with-form-builder.component.html',
  styleUrls: ['./reactive-form-with-form-builder.component.scss']
})
export class ReactiveFormWithFormBuilderComponent {
  rForm: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  contactRegex: string = "[0-9]+";

  constructor(private fBuilder: FormBuilder){
    /* FORM GROUP */
    this.rForm = fBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(19)]],
      email: ['', [Validators.required, Validators.maxLength(39), Validators.pattern(this.emailRegex)]],

      /* NESTED FORM GROUP */
      contactDetails: fBuilder.group({
        address: new FormControl ('', [Validators.required, Validators.maxLength(179)]),
        shippingAddress: new FormControl ('', [Validators.required, Validators.maxLength(179)]),
        contactNo: new FormControl ('', [Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern(this.contactRegex)])
      }),

      /* FORM ARRAY */
      skills: fBuilder.array([])
    });
  }

  /* this is the way of generating form controllers individually. */
  get FullName(){
    return this.rForm.get('fullName') as FormControl;
  }
  get Email(){
    return this.rForm.get('email') as FormControl;
  }

  addSkill(skillValue: string) {  
    this.rForm.get('skills').push(new FormControl(skillValue));
    console.log(this.rForm.get('skills').value);
  }

  removeSkill(index: number) {
      this.rForm.get('skills')?.removeAt(index);
  }

  onSubmit(){
    console.log(this.rForm);
    console.log(this.rForm.value);
  }
}
