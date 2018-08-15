import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks;
  description;
  constructor(private _httpService: HttpService) { }
   // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit() {
    // this.getTasksFromService();
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data;
    });
  }
  getDescription(task_id) {
    const observable = this._httpService.getTaskbyID(task_id);
    observable.subscribe(data => {
      console.log('Got our task', data);
      this.description = data;
    });
  }
}
