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
  plants: Plant[] = [];

  constructor(
    private dialog: MatDialog,
    private vitalsService: VitalsService
  ) {
  }

  ngOnInit(): void {
    this.vitalsService.getAllVitals().subscribe((plants: Plant[]) => {
      this.plants = plants;
    });
  };

  openInfoDialog(day: Day) {
    this.dialog.open(StatusInfoDialogComponent, {
      data: {day: day}
    });
  }

  // return the name of the day 'Mo', 'Di'... or 'Heute', if it is today
  dayNameOrToday(name: string | undefined): string {
    const weekDays = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    if (name === weekDays[new Date().getDay()]) {
      return 'Heute';
    } else {
      return name ? name : '';
    }
  }
}
