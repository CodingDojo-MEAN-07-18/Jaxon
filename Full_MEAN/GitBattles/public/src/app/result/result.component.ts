import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  user1;
  user2;
  result;
  constructor(private _github: GithubService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    [this.user1, this.user2] = this._github.results();
    this._github.findUser(this.user1)
      .subscribe(user => {
        this.user1 = user[0];
        console.log(this.user1);
      });
    this._github.findUser(this.user2)
      .subscribe(user => {
        this.user2 = user[0];
        console.log(this.user2);
        this.evaluate(this.user1, this.user2);
      });
  }
  evaluate(user1, user2) {
    if (user1.score > user2.score) {
      this.result = [user1, user2];
    } else if (user1.score < user2.score) {
      this.result = [user2, user1];
    } else {
      this.result = null;
    }
    console.log(this.result);
  }

}
