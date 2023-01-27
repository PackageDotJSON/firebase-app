import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/models/app-state.model';
import { FireBaseService } from 'src/app/services/firebase/firebase.service';
import { AddMessageAction } from 'src/app/state-management/store/actions/message.action';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent implements OnInit {
  messageForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAppState>,
    private fireBaseService: FireBaseService
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
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
   this.store.dispatch(new AddMessageAction(this.messageForm.value));
   this.fireBaseService.addMessage(this.messageForm.value);
  }
}
