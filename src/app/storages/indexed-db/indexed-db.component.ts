import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IndexedDbService } from 'src/app/services/indexed-db.service';

@Component({
  selector: 'app-indexed-db',
  templateUrl: './indexed-db.component.html',
  styleUrls: ['./indexed-db.component.scss']
})
export class IndexedDbComponent implements OnInit{
  itemForm: any;
  items: any[] = [];

  isUpdate: boolean = false;
  itemId!: number;
  updateItemId!: number;

  constructor(private indexedDbService: IndexedDbService, private formBuilder: FormBuilder) {
    this.itemForm = this.formBuilder.group({
      itemName: new FormControl('', Validators.required),
      itemCount: new FormControl('', Validators.required),
      itemPrice: new FormControl('', Validators.required),
      itemDescription: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.getAllItems();
  }

  /* ADD ITEM TO THE DB*/
  addItem() {
    if(this.itemForm.valid){
      this.indexedDbService.addItem(this.itemForm.value)
        .then(() => {        
          window.alert('item added successfully');
          this.getAllItems();
          this.clearValues();
      });
    }else{
      window.alert('invalid form');
    }
  }

  /* GET ALL ITEMS IN THE DB*/
  getAllItems() {
    this.indexedDbService.getAllItems().then((result) => {
      if(result) this.items = result;
    });
  }

  /* GET ITEM IN THE DB*/
  getItem() {
    this.indexedDbService.getItem(this.itemId)
      .then((result: any) => {
        if (result) {
          this.items = [];
          this.items.push(result);
        }
      })
      .catch((error) => {
        console.error('error retrieving item:', error);
        window.alert('no item exists with the given ID.');
      });
  }

  /* UPDATE ITEM IN THE DB*/
  setItem(item: any){
    this.itemForm.patchValue({
      itemName: item.itemName,
      itemCount: item.itemCount,
      itemPrice: item.itemPrice,
      itemDescription: item.itemDescription
    });
    this.updateItemId = item.id;
    this.isUpdate = true;
  }
  
  updateItem() {
    if(this.itemForm.valid){
      let itemValues = this.itemForm.value;
      itemValues.id = this.updateItemId;      

      this.indexedDbService.updateItem(itemValues).
        then(() => {
          window.alert('item updated successfully');
          this.getAllItems();
          this.clearValues();
        });
    }else{
      window.alert('invalid form');
    }
  }

  /* DELETE ITEM IN THE DB*/
  deleteItem(id: number) {
    this.indexedDbService.deleteItem(id).then(() => {
      window.alert('item deleted successfully');
      this.getAllItems();
    });
  }

  /* CLEAR ITEMS IN THE DB*/
  clearDatabase() {
    this.indexedDbService.clearDatabase().then(() =>  {
      window.alert('database cleared successfully');
      this.getAllItems();
    });
  }

  clearValues(){
    this.itemForm.reset();
    this.isUpdate = false;
  }
}
