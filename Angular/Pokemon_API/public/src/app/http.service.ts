import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon() {
    let new_request = '';
    const dragonite = this._http.get('https://pokeapi.co/api/v2/pokemon/149/');
    dragonite.subscribe(<Poke>(data) => {
      console.log('Got Dragonite!', data);
      console.log('Dragonite has the ability ' + data.abilities[1].ability.name);
      new_request = data.abilities[1].ability.url;
      const other_pokes = this._http.get(new_request);
      other_pokes.subscribe(<Ablity>(result) => {
        console.log(result.pokemon.length - 1 + ' other Pokemon also have ' + data.abilities[1].ability.name + ' as an ability');
      });

    });
  }
}
interface Poke {
  abilities: Object[];
}
interface Ability {
  pokemon: object[];
}
