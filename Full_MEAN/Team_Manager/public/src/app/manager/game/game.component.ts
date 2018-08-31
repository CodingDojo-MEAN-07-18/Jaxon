import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  player;
  id: number;
  constructor(private readonly _player: PlayerService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
  onEdit($event, player) {

  }
}
