import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player-service.service';
import { Player } from '../models/player';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  players: Player[] = [];
  playing: String;
  num: number;
  constructor(private readonly _player: PlayerService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.num = params['num'];
    });
    this.getPlayers();
  }
  getPlayers() {
    this._player.getPlayers()
      .subscribe(players => {
        this.players = players;
        console.log(players);
      });
  }
  onEdit(player, styleOption) {
    this._player.editGame(player, this.num, styleOption)
      .subscribe(playerer => {
      });
  }
}
