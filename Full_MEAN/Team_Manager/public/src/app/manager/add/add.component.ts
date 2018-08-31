import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '../../services/player-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Player } from '../models/player';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  player: Player = new Player();
  constructor(private readonly _player: PlayerService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(this.player);
    this._player.addPlayer(this.player)
      .subscribe(player => {
        console.log(player);
        this.player = new Player();
        form.reset();
        this._router.navigate(['']);

      });
  }

}
