import { Action } from '@ngrx/store';
import { MESSAGE_ACTION_TYPES } from 'src/app/enums/actions.enum';
import { IMessage } from 'src/app/models/message.model';

export class AddMessageAction implements Action {
  readonly type = MESSAGE_ACTION_TYPES.ADD_MESSAGE;

  constructor(public payload: IMessage) {}
}
