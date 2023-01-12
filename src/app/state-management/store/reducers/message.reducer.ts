import { IMessage } from 'src/app/models/message.model';
import { INITIAL_STATE } from 'src/app/common/common';
import { MessageAction, MESSAGE_ACTION_TYPES } from '../actions/message.action';

export const MessageReducer = (
  state: IMessage[] = INITIAL_STATE,
  action: MessageAction
) => {
  switch (action.type) {
    case MESSAGE_ACTION_TYPES.ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};
