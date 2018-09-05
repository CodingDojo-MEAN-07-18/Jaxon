import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  constructor(
    private _githubService: GithubService,
    private _route: ActivatedRoute,
    private _router: Router) { }
}
