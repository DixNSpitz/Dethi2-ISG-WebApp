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
    this.gamesService.getGameState().subscribe((data: any) => {
      console.log(data);
    });
  }

  navigateToGame(gameRoute: string) {
    this.gamesService.startGame(gameRoute).subscribe(res => {
      console.log("Game started: ", res);
    });
    this.router.navigate([`/games/${gameRoute}`]);
  }

  routeBack() {
    this.router.navigate([`/home`]);
  }
}
