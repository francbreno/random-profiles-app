import { combineReducers } from 'redux';

import profilesReducer from './profiles_reducer';
import contactsReducer from './contacts_reducer';
import selectedReducer from './selected_reducer';

const rootReducer = combineReducers({
  profiles: profilesReducer,
  contacts: contactsReducer,
  selected: selectedReducer
});

export default rootReducer;
