import { ADD_CONTACT, REMOVE_CONTACT } from '../actions';
import _ from 'lodash';

export default function contactsReducer(state = [], action) {
  switch(action.type) {
    case ADD_CONTACT:
      return [...state, action.payload.id.value];
    case REMOVE_CONTACT:
      return state.filter(id => id !== action.payload.id.value);
    default:
      return state;
  }
}
