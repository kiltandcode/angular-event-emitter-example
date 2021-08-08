import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToDoListService } from './services/to-do-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'To-Do List';
  public toDoList: string[] = [];

  constructor(
    private titleService: Title,
    private toDoListService: ToDoListService) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.toDoList = this.toDoListService.getToDoList();
  }

  public appendToDo(toDo: string) {
    if (toDo?.length > 0) {
      this.toDoList.push(toDo);
    }
  }
}
