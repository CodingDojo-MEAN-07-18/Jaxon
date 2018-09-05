import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubService } from '../services/github.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  username1: String;
  username2: String;
  error1;
  error2;
  user1;
  user2;
  constructor(private _github: GithubService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }
  onSubmit1(event, form) {
    event.preventDefault();
    this._github.findUser(this.username1)
      .subscribe(user => {
        user = user[0];
        if (user !== undefined) {
          this.user1 = user;
          console.log(this.user1);
        } else {
          console.log('in else');
          this._github.getUser(this.username1)
            .subscribe(userer => {
              console.log(userer);
              if (userer !== 'undefined') {
                this.user1 = userer;
                this.createUser(userer);
              }else {
                this.error1 = 'Username does not Exist';
              }
            });
        }
      });
  }
  onSubmit2(event, form) {
    event.preventDefault();
    this._github.findUser(this.username2)
      .subscribe(user => {
        user = user[0];
        if (user !== undefined) {
          this.user2 = user;
          console.log(this.user2);
        } else {
          console.log('in else');
          this._github.getUser(this.username2)
            .subscribe(userer => {
              if (userer !== 'undefined') {
                this.user2 = userer;
                this.createUser(userer);
              }else {
                this.error2 = 'Username does not Exist';
              }
            });
        }
      });
  }
  createUser(user) {
    this._github.createUser(user)
            .subscribe(userer => {
              console.log(userer);
            });
  }
  onBattle() {
    this._github.preResults(this.user1.username, this.user2.username);
    this._router.navigate(['/battle/result']);
  }
}
