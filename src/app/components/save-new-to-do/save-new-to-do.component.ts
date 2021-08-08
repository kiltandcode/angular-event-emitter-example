import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-save-new-to-do',
  templateUrl: './save-new-to-do.component.html',
  styleUrls: ['./save-new-to-do.component.css']
})
export class SaveNewToDoComponent implements OnInit {
  formGroup: any;
  @Output() saveToDoEvent = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private toDoListService: ToDoListService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      toDo: ''
    });
  }
  
  public saveNewToDo(formData: any) {
    let toDo = formData['toDo'];
    this.toDoListService.saveNewToDo(toDo);
    this.saveToDoEvent.emit(toDo);
  }
}
