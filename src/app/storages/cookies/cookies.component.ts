import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent {
  setKey!: string;
  setValue!: string;

  getKey!: string;
  displayValue!: string;

  checkKey!: string;
  checkStatus!: string;

  deleteKey!: string;

  updateKey!: string;
  updateValue!: string;

  constructor(private cookieService: CookieService) { }

  /* SET A COOKIE WITH A KEY-VALUE PAIR */
  setCookie(){
    this.cookieService.set(this.setKey, this.setValue);

    this.setKey = '';
    this.setValue = '';
  }

  /* GET THE VALUE OF A COOKIE */
  getCookie(){
    const value = this.cookieService.get(this.getKey);

    if(value) this.displayValue = value;
    else this.displayValue = 'invalid cookie key';
  }

  /* CHECK IF A COOKIE WITH THE GIVEN KEY EXISTS */
  checkCookie(){
    const cookieExists = this.cookieService.check(this.checkKey);

    if(cookieExists) this.checkStatus = 'true';
    else this.checkStatus = 'false';
  }

  /* DELETE A COOKIE WITH THE GIVEN KEY */
  deleteCookie(){
    const value = this.cookieService.check(this.deleteKey);
    
    if(value) {
      this.cookieService.delete(this.deleteKey);
      window.alert(`successfully delete value by key: ${this.deleteKey}`);
      this.deleteKey = '';
    }
    else if(this.deleteKey){
      window.alert(`key value ${this.deleteKey} does not exist in Cookie Storage.`);
    }
    else{
      window.alert(`please enter key value input`);
    }
  }

  /* UPDATE A COOKIE WITH THE KEY-VALUE PAIR */
  updateCookie(){
    const value = this.cookieService.get(this.updateKey);

    if(!this.updateValue){
      window.alert(`please enter key value input`);
    }else if(value) {
      this.cookieService.set(this.updateKey, this.updateValue);
      window.alert(`successfully updated value by key: ${this.updateKey}`);
      this.updateKey = '';
      this.updateValue = '';
    }else{
      window.alert(`key value ${this.updateKey} does not exist in cookie storage.`);
    }
  }
}
