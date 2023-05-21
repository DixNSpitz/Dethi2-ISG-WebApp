import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateToRoute(route: string) {
    console.log("navigateToRoute() called with route: " + route);
    this.router.navigate([route]);
  }
}
