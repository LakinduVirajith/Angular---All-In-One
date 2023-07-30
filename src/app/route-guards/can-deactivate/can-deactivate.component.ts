import { Component, OnInit } from '@angular/core';
import { CommonVariables } from 'src/app/common/CommonVariables';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.component.html',
  styleUrls: ['./can-deactivate.component.scss']
})
export class CanDeactivateComponent implements OnInit{
  toDo!: string;
  toDoList: string[] = [];

  ngOnInit(): void {
    CommonVariables.hasUnsavedChanges = false;
    this.getToDoList();
  }

  isTypeDoEdit(){
    if(this.toDo.length != 0) CommonVariables.hasUnsavedChanges = true;
    else CommonVariables.hasUnsavedChanges = false;
  }

  saveToDo(){
    CommonVariables.toDoList.push(this.toDo);
    this.toDo = "";
    this.isTypeDoEdit();
    this.getToDoList();
  }

  getToDoList(){
    this.toDoList = CommonVariables.toDoList;
  }

  removeToDo(index: number){
    CommonVariables.toDoList.splice(index, 1);
    this.getToDoList();
  }
}
