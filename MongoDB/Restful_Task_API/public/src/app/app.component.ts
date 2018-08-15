import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks: any;
  task: any;
  edit: any;
  newTask: any;
  errors: any;
  constructor(private _httpService: HttpService) { }
   // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit() {
    // this.getTasksFromService();
    this.newTask = { title: '', description: '' };
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data;
    });
  }
  getTask(task_id) {
    const observable = this._httpService.getTaskbyID(task_id);
    observable.subscribe(data => {
      console.log('Got our task', data);
      this.task = data;
    });
  }
  getTaskEdit(task_id) {
    const observable = this._httpService.getTaskbyID(task_id);
    observable.subscribe(data => {
      console.log('Got our task', data);
      this.edit = data;
    });
  }
  onSubmit() {
    const observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log('Successfully submitted form', data);
    });
    this.newTask = { title: '', description: '' };
    this.getTasksFromService();
  }
  editTask(task_id) {
    const observable = this._httpService.editTask(this.edit);
    observable.subscribe(data => {
      console.log('Successfully edited task', data);
    });
    this.edit = null;
  }
  deleteTask(task_id) {
    const observable = this._httpService.deleteTaskByID(task_id);
    observable.subscribe(data => {
      console.log('Deleted Task', data);
    });
    this.getTasksFromService();
  }
}
