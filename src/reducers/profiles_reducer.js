import { LOAD_PROFILES } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  console.log('REDUCER ON');
  switch(action.type) {
    case LOAD_PROFILES:
      return _.mapKeys(action.payload.data.results, 'email');
    default:
      return state;
  }
}
