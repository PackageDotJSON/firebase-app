import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireBaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent implements OnInit {
  messageForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private fireBaseService: FireBaseService
  ) {}

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
   * Calls the service in order to send the form data to firebase
   * @param {}
   * @return {}
   */
  onSubmit() {
    this.fireBaseService.addMessage(this.messageForm.value);
  }
}
