import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StatusInfoDialogComponent} from "./status-info-dialog/status-info-dialog.component";
import {VitalsService} from "../../services/vitals.service";
import {Plant} from "../../models/Plant";
import {Day} from "../../models/Day";

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {
  weekDays = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  displayedDays: string[] = [];
  plants: Plant[] = [];

  constructor(
    private dialog: MatDialog,
    private vitalsService: VitalsService
  ) {
  }

  ngOnInit(): void {
    const today = new Date().getDay();
    for (let i = 0; i < 7; i++) {
      this.displayedDays.unshift(this.weekDays[(today - i + 7) % 7]);
    }
    this.vitalsService.getAllVitals().subscribe((plants: Plant[]) => {
      this.plants = plants;
    });
  };

  openInfoDialog(day: Day) {
    this.dialog.open(StatusInfoDialogComponent, {
      data: {day: day}
    });
  }


}
