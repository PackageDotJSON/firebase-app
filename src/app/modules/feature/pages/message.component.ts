import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { APP_SETTINGS } from 'src/app/settings/settings';
import { MessageFormComponent } from '../components/message-form/message-form.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * Listens to click event and triggers the dialog
   * @param {}
   * @return {}
   */
  openDialog() {
    const dialogRef = this.dialog.open(MessageFormComponent, {
      width: APP_SETTINGS.DIALOG_WIDTH,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
