import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Day} from "../../../models/Day";
import {Plant} from "../../../models/Plant";

@Component({
  selector: 'app-status-info-dialog',
  templateUrl: './status-info-dialog.component.html',
  styleUrls: ['./status-info-dialog.component.css'],
})
export class StatusInfoDialogComponent {

  statusData = [
    {
      id: 'temperature',
      img: 'assets/icons/warm.png',
      value: this.data.day?.temperature_value,
      color: '#89C839',
      min: this.data.plant.temperature_min,
      max: this.data.plant.temperature_max
    },
    {
      id: 'water',
      img: 'assets/icons/drop.png',
      value: this.data.day?.water_value,
      color: '#1592A6',
      min: this.data.plant.water_min,
      max: this.data.plant.water_max
    },
    {
      id: 'sun',
      img: 'assets/icons/FullSun.png',
      value: this.data.day?.light_value,
      color: '#FFD23F',
      min: this.data.plant.light_min,
      max: this.data.plant.light_max
    }
  ];


  constructor(public dialogRef: MatDialogRef<StatusInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {day: Day, plant: Plant}) {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  calculateProgress(value: number | undefined, min: number | undefined, max: number | undefined): number {
    console.log('Calculating progress', {value, min, max});
    if (!value || !min || !max) return 0;

    const average = (min + max) / 2;
    const range = max - min;
    const buffer = range * 0.10; // Buffer of 30% on either side of average
    const lowerThreshold = average - buffer;
    const upperThreshold = average + buffer;

    if (value >= lowerThreshold && value <= upperThreshold) {
      return 100; // Value within 'buffer' range of average is considered 100%
    } else if (value < lowerThreshold) {
      // Value is below min, return 5%
      if (value <= min) return 5;
      // Linear scale from lowerThreshold to min, from 100% to 5%
      const slope = (5 - 100) / (min - lowerThreshold);
      const progress = slope * (value - lowerThreshold) + 100;
      return Math.min(Math.max(progress, 5), 100); // Not lower than 5% and not more than 100%
    } else {
      // Value is above max, return 5%
      if (value >= max) return 5;
      // Linear scale from upperThreshold to max, from 100% to 5%
      const slope = (5 - 100) / (max - upperThreshold);
      const progress = slope * (value - upperThreshold) + 100;
      return Math.min(Math.max(progress, 5), 100); // Not lower than 5% and not more than 100%
    }
  }
}
