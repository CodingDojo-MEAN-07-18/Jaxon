import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  users;
  constructor(private _github: GithubService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._github.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

}
