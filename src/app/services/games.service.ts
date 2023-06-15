import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {
  }

  startGame(gameName: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ game: gameName });
    return this.http.post('http://127.0.0.1:5000/games', body, { headers: headers });
  }
}
