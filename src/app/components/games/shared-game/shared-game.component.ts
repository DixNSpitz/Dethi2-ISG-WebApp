import {Component, Input, OnInit} from '@angular/core';
import {GamesService} from "../../../services/games.service";
import {Router} from "@angular/router";
import {interval, Subscription, switchMap, takeWhile} from "rxjs";

@Component({
  selector: 'app-shared-game',
  templateUrl: './shared-game.component.html',
  styleUrls: ['./shared-game.component.css']
})
export class SharedGameComponent implements OnInit {
  @Input() gameName: string = '';
  private subscription: Subscription | undefined;
  private gameOn = true;

  constructor(private gamesService: GamesService, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = interval(3000) // You can adjust the interval as needed
      .pipe(
        switchMap(() => this.gamesService.getGameState()),
        takeWhile(() => this.gameOn)
      )
      .subscribe((res) => {
        if (res.state === 'off') {
          this.gameOn = false;
          this.router.navigate(['/games']); // Update this with the correct route to your games overview
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe(); // This ensures that the subscription is cleaned up to avoid memory leaks
  }

  abortGame() {
    this.gamesService.stopGame().subscribe(res => {
      console.log("Game stopped: ", res);
    });
    this.router.navigate([`/games`]);
  }
}
