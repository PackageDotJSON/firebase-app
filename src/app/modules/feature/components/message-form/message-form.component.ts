import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireBaseService } from 'src/app/services/firebase/firebase.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/models/message.model';
import { IAppState } from 'src/app/models/app-state.model';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent implements OnInit {
  messageForm!: FormGroup;
  message$!: Observable<IMessage[]>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAppState>,
    private fireBaseService: FireBaseService
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.store.select(store => store.appState).subscribe(res => console.log(res));
  }

  /**
   * Creates a new form
   * @param {}
   * @return {}
   */
  initializeForm() {
    this.messageForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.maxLength(20)]],
      userMessage: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  /**
   * Dispatches the form data to the reducer
   * @param {}
   * @return {}
   */
  onSubmit() {
   this.fireBaseService.addMessage(this.messageForm.value);
  }
}
