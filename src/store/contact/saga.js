import { all, put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import {
  actionTypes,
  getContactError,
  getContactSuccess,
  updateContactSuccess,
  updateContactError,
} from "./action";

function* getContactSaga() {
  try {
    yield put(getContactSuccess());
  } catch (err) {
    yield put(getContactError(err));
  }
}

function* addContactSaga(payload) {
  try {
    const { contact } = payload;
    const localContact = JSON.parse(
      localStorage.getItem("persist:Appointments")
    ).contact;
    let currentContact = JSON.parse(localContact);
    currentContact.contacts.push(contact);
    currentContact.contactTotal++;
    yield put(updateContactSuccess(currentContact));
  } catch (err) {
    yield put(getContactError(err));
  }
}

function* removeContactSaga(payload) {
  try {
    const { contact } = payload;
    let localContact = JSON.parse(
      JSON.parse(localStorage.getItem("persist:Appointments")).contact
    );
    let index = localContact.contacts.findIndex((c) => c.id === contact.id);
    localContact.contactTotal = localContact.contactTotal - 1;
    localContact.contacts.splice(index, 1);
    if (localContact.contacts.length === 0) {
      localContact.contacts = [];
      localContact.contactTotal = 0;
    }
    yield put(updateContactSuccess(localContact));
  } catch (err) {
    yield put(getContactError(err));
  }
}

function* clearContactSaga() {
  try {
    const emptyContact = {
      contacts: [],
      contactTotal: 0,
    };
    yield put(updateContactSuccess(emptyContact));
  } catch (err) {
    yield put(updateContactError(err));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.GET_CONTACT, getContactSaga)]);
  yield all([takeEvery(actionTypes.ADD_CONTACT, addContactSaga)]);
  yield all([takeEvery(actionTypes.REMOVE_CONTACT, removeContactSaga)]);
  yield all([takeEvery(actionTypes.CLEAR_CONTACT, clearContactSaga)]);
  yield all([takeEvery(actionTypes.CLEAR_CONTACT_SUCCESS, clearContactSaga)]);
}
