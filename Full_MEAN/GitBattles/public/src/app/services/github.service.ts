import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  username1;
  username2;
  constructor(private readonly _http: HttpClient) { }
  findUser(username) {
    return this._http.get('/api/users/' + username);
  }
  getUser(username) {
    return this._http.get('https://api.github.com/users/' + username);
  }
  getUsers() {
    return this._http.get('/api/users');
  }
  createUser(username) {
    return this._http.post('/api/users', username);
  }
  preResults(username1, username2) {
    this.username1 = username1;
    this.username2 = username2;
  }
  results() {
    return [this.username1, this.username2];
  }
}
