import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '../../services/player-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Player } from '../models/player';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: Player[] = [];
  constructor(private readonly _player: PlayerService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getPlayers();
  }
  getPlayers() {
    this._player.getPlayers()
      .subscribe(players => {
        this.players = players;
      });
  }
  onDelete(player_id) {
    console.log(player_id);
    this._player.deletePlayer(player_id)
      .subscribe(player => {
        this.getPlayers();
      });
  }
}
