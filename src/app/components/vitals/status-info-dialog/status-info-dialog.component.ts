import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-status-info-dialog',
  templateUrl: './status-info-dialog.component.html',
  styleUrls: ['./status-info-dialog.component.css']
})
export class StatusInfoDialogComponent {
  statusInfos = [
    { smiley: '😊', text: '~70%nFk' },
    { smiley: '😐', text: '~20 Grad' },
    { smiley: '😊', text: '~3lm' }
  ];

  constructor(public dialogRef: MatDialogRef<StatusInfoDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
