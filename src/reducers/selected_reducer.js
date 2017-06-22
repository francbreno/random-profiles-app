import { SELECT_PROFILE } from '../actions';

export default function selectedReducer(state = null, action) {
  switch(action.type) {
    case SELECT_PROFILE:
      return action.payload.id;
    default:
      return state;
  }
}
