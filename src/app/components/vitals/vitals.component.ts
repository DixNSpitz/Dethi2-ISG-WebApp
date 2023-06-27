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
      (plants: any[]) => {
        this.plants = plants.map(plant => {
          let plantObj = Object.assign(new Plant(), plant);
          if (plantObj.days) {
            plantObj.days = plantObj.days.map((day: any) => {
              let dayObj = Object.assign(new Day(), day);
              dayObj.mood = plantObj.calculateDayMood(dayObj);
              return dayObj;
            });
          }
          return plantObj;
        });
        console.log(this.plants);
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  openInfoDialog(day: Day, plant: Plant) {
    this.dialog.open(StatusInfoDialogComponent, {
      data: {day, plant}
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
