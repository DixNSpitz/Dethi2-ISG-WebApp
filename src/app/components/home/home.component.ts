import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {InfoDialogComponent} from "./info-dialog/info-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('infoButton', { static: true }) backButton: ElementRef = new ElementRef<any>(null);


  constructor(private router: Router, public dialog: MatDialog) { }

  navigateToRoute(route: string) {
    console.log("navigateToRoute() called with route: " + route);
    this.router.navigate([route]);
  }

  openInfoDialog() {
        this.dialog.open(InfoDialogComponent);
  }

}
