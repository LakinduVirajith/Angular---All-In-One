import { Component } from '@angular/core';
import { CommonVariables } from 'src/app/common/CommonVariables';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-route-guards',
  templateUrl: './route-guards.component.html',
  styleUrls: ['./route-guards.component.scss']
})
export class RouteGuardsComponent {
  faCheck = faCheck;
  faXmark = faXmark;
  isAuthenticated: boolean = CommonVariables.isAuthenticated;

  userType: string = CommonVariables.userType;

  setAuth(){
    this.isAuthenticated = !this.isAuthenticated ;
    CommonVariables.isAuthenticated = !CommonVariables.isAuthenticated;
  }

  setType(type: string){
    if(type == 'A') CommonVariables.userType = 'admin'
    else if(type == 'S') CommonVariables.userType = 'seller'
    else if(type == 'U') CommonVariables.userType = 'user'
    else CommonVariables.userType = 'user'

    this.userType = CommonVariables.userType;
  }
}
