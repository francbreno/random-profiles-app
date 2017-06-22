import { createSelector } from 'reselect';
import _ from 'lodash';

function getContacts(profiles, contacts) {
  return _.filter(profiles, profile => contacts.includes(profile.id.value));
}

const ContactsSelector = createSelector(state => state.profiles, state => state.contacts, getContacts);
export default ContactsSelector;
