import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  constructor(private router: Router) {
  }

  navigateToGame(gameRoute: string) {
    this.router.navigate([`/games/${gameRoute}`]);
  }

  routeBack() {
    this.router.navigate([`/home`]);
  }
}
