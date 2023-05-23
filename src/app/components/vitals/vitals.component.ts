import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StatusInfoDialogComponent} from "./status-info-dialog/status-info-dialog.component";

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {
  weekDays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  displayedDays: string[] = [];

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    const today = new Date().getDay();
    for (let i = 0; i < 7; i++) {
      this.displayedDays.unshift(this.weekDays[(today - i + 7) % 7]);
    }
  }

  openInfoDialog() {
    this.dialog.open(StatusInfoDialogComponent);
  }


}
