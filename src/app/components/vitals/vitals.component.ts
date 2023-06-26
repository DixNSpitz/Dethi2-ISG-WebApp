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
  loading: boolean = true;

  constructor(
    private dialog: MatDialog,
    private vitalsService: VitalsService
  ) {
  }

  ngOnInit(): void {
    this.vitalsService.getAllVitals().subscribe(
      (plants: Plant[]) => {
        this.plants = plants;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  openInfoDialog(day: Day) {
    this.dialog.open(StatusInfoDialogComponent, {
      // data: {day: day}
      data: {
        ...day,
        temperature_value: 0,
        light_value: 100,
        water_value: 60
      } as Day
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
