import axios from 'axios';

export const LOAD_PROFILES = '[profiles] LOAD';
export const SELECT_PROFILE = '[profiles] SELECT';
export const REMOVE_CONTACT = '[contacts] REMOVE';
export const ADD_CONTACT = '[contacts] ADD';

export function loadProfiles() {
  console.log('action', loadProfiles);
  const request = axios.get(`https://randomuser.me/api/?results=50`);

  return {
    type: LOAD_PROFILES,
    payload: request
  };
}

export function selectProfile(profile) {
  return {
    type: SELECT_PROFILE,
    payload: profile
  };
}

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
}

export function removeContact(contact) {
  return {
    type: REMOVE_CONTACT,
    payload: contact
  };
}
