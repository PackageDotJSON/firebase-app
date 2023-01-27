import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/models/app-state.model';
import { IMessage } from 'src/app/models/message.model';
import { APP_SETTINGS } from 'src/app/settings/settings';
import { MessageFormComponent } from '../components/message-form/message-form.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  message$!: Observable<IMessage[]>;

  constructor(public dialog: MatDialog, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.message$ = this.store.select('appState');
  }

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
