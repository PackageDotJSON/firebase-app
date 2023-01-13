import { Injectable } from '@angular/core';
import { IMessage } from 'src/app/models/message.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { APP_SETTINGS } from 'src/app/settings/settings';

@Injectable({
  providedIn: 'root',
})
export class FireBaseService {
  constructor(private firestore: AngularFirestore) {}

  /**
   * Add user message to firebase
   * @param {IMessage} payload
   * @return {}
   */
  addMessage(payload: IMessage) {
    this.firestore
      .collection(APP_SETTINGS.DOCUMENT_TITLE)
      .add(payload)
      .then((res) => console.log(res));
  }
}
