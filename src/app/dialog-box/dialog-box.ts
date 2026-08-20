import { Component, inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  imports: [],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css',
})
export class DialogBox {
   data = inject(MAT_DIALOG_DATA, {optional: true});
   dialogRef = inject(MatDialogRef)

   close(): void {
    this.dialogRef?.close()
   }
}
