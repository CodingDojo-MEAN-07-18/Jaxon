import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../manager/models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private readonly _http: HttpClient) { }
  getPlayers(): Observable<Player[]> {
    return this._http.get<Player[]>('api/players/list');
  }
  addPlayer(player): Observable<Player>{
    return this._http.post<Player>('api/players/list', player);
  }
  editGame(player, game): Observable<Player> {
    return this._http.put<Player>('api/status/' + game + '/' + player._id, player);
  }
  deletePlayer(id: number): Observable<Player> {
    return this._http.delete<Player>('api/players/' + id);
  }

}
