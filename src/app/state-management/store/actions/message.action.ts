import { Action } from '@ngrx/store';
import { IMessage } from 'src/app/models/message.model';

export const enum MESSAGE_ACTION_TYPES {
  ADD_MESSAGE = '[MESSAGING] Add Item',
  ADD_MESSAGE_SUCCESS = '[MESSAGING] Add Item Success',
  ADD_MESSAGE_FAILURE = '[MESSAGING] Add Item Failure',
}

export class AddMessageAction implements Action {
  readonly type = MESSAGE_ACTION_TYPES.ADD_MESSAGE;

  constructor(public payload: IMessage) {}
}

export type MessageAction = AddMessageAction;
