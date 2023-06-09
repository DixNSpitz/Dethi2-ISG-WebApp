import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Day} from "../../../models/Day";

@Component({
  selector: 'app-status-info-dialog',
  templateUrl: './status-info-dialog.component.html',
  styleUrls: ['./status-info-dialog.component.css']
})
export class StatusInfoDialogComponent {

  constructor(public dialogRef: MatDialogRef<StatusInfoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {day: Day}) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
