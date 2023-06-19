import {Component, Input, OnInit} from '@angular/core';
import {GamesService} from "../../../services/games.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shared-game',
  templateUrl: './shared-game.component.html',
  styleUrls: ['./shared-game.component.css']
})
export class SharedGameComponent implements OnInit {
  @Input() gameName: string = '';

  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit(): void {

  }

  abortGame() {
    this.gamesService.stopGame().subscribe(res => {
      console.log("Game stopped: ", res);
    });
    this.router.navigate([`/games`]);
  }
}
