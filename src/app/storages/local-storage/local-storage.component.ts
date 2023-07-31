import { Component } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent {
  setKey!: string;
  setValue!: string;

  getKey!: string;
  displayValue!: string;

  removeKey!: string;

  updateKey!: string;
  updateValue!: string;

  /* SET DATA IN LOCAL STORAGE */
  setValueStorage(){  
    localStorage.setItem(this.setKey, this.setValue);

    this.setKey = '';
    this.setValue = '';
  }
  
  /* GET DATA FROM LOCAL STORAGE */
  getValueStorage(){
    const value = localStorage.getItem(this.getKey);

    if(value) this.displayValue = value;
    else this.displayValue = 'invalid storage key';
  }

  /* REMOVE DATA FROM LOCAL STORAGE */
  removeValueStorage(){
    const value = localStorage.getItem(this.removeKey);

    if(value) {
      localStorage.removeItem(this.removeKey);
      window.alert(`Successfully removed value by key: ${this.removeKey}`);
      this.removeKey = '';
    }
    else if(this.removeKey){
      window.alert(`Key value ${this.removeKey} does not exist in LocalStorage.`);
    }
    else{
      window.alert(`Please enter key value input`);
    }
  }
  
  /* UPDATE DATA IN LOCAL STORAGE */
  updateValueStorage(){
    const value = localStorage.getItem(this.updateKey);

    if(!this.updateValue){
      window.alert(`Please enter key value input`);
    }else if(value) {
      localStorage.setItem(this.updateKey, this.updateValue);
      window.alert(`Successfully updated value by key: ${this.updateKey}`);
      this.updateKey = '';
      this.updateValue = '';
    }else{
      window.alert(`Key value ${this.updateKey} does not exist in LocalStorage.`);
    }
  }
}
