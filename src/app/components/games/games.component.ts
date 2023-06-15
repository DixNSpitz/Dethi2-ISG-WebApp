import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  constructor(private router: Router, private gamesService: GamesService) {
  }

  navigateToGame(gameRoute: string) {
    this.gamesService.startGame(gameRoute).subscribe();
    this.router.navigate([`/games/${gameRoute}`]);
  }

  routeBack() {
    this.router.navigate([`/home`]);
  }
}
