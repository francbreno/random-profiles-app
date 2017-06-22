import { createSelector } from 'reselect';
import _ from 'lodash';

function getProfilesNotInContacts(profiles, contacts) {
  return _.filter(profiles, profile => !contacts.includes(profile.id.value));
}

const ProfilesSelector = createSelector(state => state.profiles, state => state.contacts, getProfilesNotInContacts);
export default ProfilesSelector;
