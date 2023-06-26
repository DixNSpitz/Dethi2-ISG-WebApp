import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private readonly headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  startGame(gameName: string) {
    const body = JSON.stringify({game: gameName});
    return this.http.post('http://127.0.0.1:5000/games', body, {headers: this.headers});
  }

  stopGame(): Observable<any> {
    const body = JSON.stringify({game: 'off'});
    return this.http.post('http://127.0.0.1:5000/games', body, {headers: this.headers});
  }

  getGameState(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/games', {headers: this.headers});
  }
}
