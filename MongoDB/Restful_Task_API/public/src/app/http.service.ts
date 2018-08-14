import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getTaskbyID('5b6a0adafa8aae4d12bfa41a');
  }
  getTasks() {
    // // our http response is an Observable, store it in a variable
    // const tempObservable = this._http.get('/tasks');
    // // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log('Got our tasks!', data));
    return this._http.get('/tasks');
  }
  getTaskbyID(id) {
  //  const tempObservable = this._http.get('/tasks/' + id);
  //  tempObservable.subscribe(data => console.log('Got our task!',data));
    return this._http.get('/tasks/' + id);
  }
  deleteTaskByID(id) {
    // const tempObservable = this._http.delete('/tasks/' + id);
    // tempObservable.subscribe(data => console.log('Got our task!', data));
    return this._http.delete('/tasks/' + id);
  }
}

