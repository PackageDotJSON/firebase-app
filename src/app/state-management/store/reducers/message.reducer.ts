import { INITIAL_STATE } from 'src/app/common/common';
import { AddMessageAction } from '../actions/message.action';
import { MESSAGE_ACTION_TYPES } from 'src/app/enums/actions.enum';

export const MessageReducer = (
  state = INITIAL_STATE,
  action: AddMessageAction
) => {
  switch (action.type) {
    case MESSAGE_ACTION_TYPES.ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};
