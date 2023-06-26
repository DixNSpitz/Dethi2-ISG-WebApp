import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Day} from "../../../models/Day";

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
      value: this.day?.temperature_value,
      color: '#89C839'
    },
    {
      id: 'water',
      img: 'assets/icons/drop.png',
      value: this.day?.water_value,
      color: '#1592A6'
    },
    {
      id: 'sun',
      img: 'assets/icons/FullSun.png',
      value: this.day?.light_value,
      color: '#FFD23F'
    }
  ];


  constructor(public dialogRef: MatDialogRef<StatusInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public day: Day ) {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  calculateProgress(value: number | undefined): number {
    if (!value) return 0;
    const step = 100 / 5; // Here 5 is the number of steps
    return Math.floor(value / step) * step;
  }
}
