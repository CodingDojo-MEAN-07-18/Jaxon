import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/player-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  constructor(
    private _playerService: PlayerService,
    private _route: ActivatedRoute,
    private _router: Router) { }
}
