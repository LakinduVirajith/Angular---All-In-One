import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss'],
})
export class NgClassComponent {
  isActive: boolean = true;

  /* exercise */
  click: boolean = false;
  onClick(){
    this.click = !this.click;
  }

  userDetails: Array<any> = [];
  index!: number;
  name!: string;
  email!: string;
  address!: string;

  onSubmit(){
    if(this.name!= null && this.email != null && this.address != null){
      this.userDetails.push({
        name: this.name,
        email: this.email,
        address: this.address
      });
    }
  }

  deleteRow(index: any){
    this.index = index;
    this.userDetails.splice(index, 1);
  }
}
