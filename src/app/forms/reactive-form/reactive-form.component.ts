import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  rForm: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  contactRegex: string = "[0-9]+";

  constructor(){
    /* FORM GROUP */
    this.rForm = new FormGroup({
      fullName: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(19)]),
      email: new FormControl ('', [Validators.required, Validators.maxLength(39), Validators.pattern(this.emailRegex)]),

      /* NESTED FORM GROUP */
      contactDetails: new FormGroup({
        address: new FormControl('', [Validators.required, Validators.maxLength(179)]),
        shippingAddress: new FormControl('', [Validators.required, Validators.maxLength(179)]),
        contactNo: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern(this.contactRegex)])
      }),

      /* FORM ARRAY */
      skills: new FormArray([])
    });
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
