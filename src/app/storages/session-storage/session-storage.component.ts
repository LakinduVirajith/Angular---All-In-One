import { Component } from '@angular/core';

@Component({
  selector: 'app-session-storage',
  templateUrl: './session-storage.component.html',
  styleUrls: ['./session-storage.component.scss']
})
export class SessionStorageComponent {
  setToken!: string;
  setValue!: string;

  getToken!: string;
  displayValue!: string;

  removeToken!: string;

  updateToken!: string;
  updateValue!: string;

  /* SET DATA IN SESSION STORAGE */
  setValueStorage(){  
    sessionStorage.setItem(this.setToken, this.setValue);

    this.setToken = '';
    this.setValue = '';
  }

  /* GET DATA FROM SESSION STORAGE */
  getValueStorage(){
    const value = sessionStorage.getItem(this.getToken);

    if(value) this.displayValue = value;
    else this.displayValue = 'invalid storage token';
  }

  /* REMOVE DATA FROM SESSION STORAGE */
  removeValueStorage(){
    const value = sessionStorage.getItem(this.removeToken);

    if(value) {
      sessionStorage.removeItem(this.removeToken);
      window.alert(`successfully removed value by token: ${this.removeToken}`);
      this.removeToken = '';
    }
    else if(this.removeToken){
      window.alert(`token value ${this.removeToken} does not exist in session storage.`);
    }
    else{
      window.alert(`please enter token value input`);
    }
  }

  /* UPDATE DATA IN SESSION STORAGE */
  updateValueStorage(){
    const value = sessionStorage.getItem(this.updateToken);

    if(!this.updateValue){
      window.alert(`please enter token value input`);
    }else if(value) {
      sessionStorage.setItem(this.updateToken, this.updateValue);
      window.alert(`successfully updated value by token: ${this.updateToken}`);
      
      this.updateToken = '';
      this.updateValue = '';
    }else{
      window.alert(`token value ${this.updateToken} does not exist in session storage.`);
    }
  }
}
