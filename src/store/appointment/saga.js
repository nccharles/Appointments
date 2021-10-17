import { all, put, takeEvery } from "redux-saga/effects";

import {
  actionTypes,
  getAppointmentError,
  getAppointmentSuccess,
  updateAppointmentSuccess,
  updateAppointmentError,
} from "./action";


function* getAppointmentSaga() {
  try {
    yield put(getAppointmentSuccess());
  } catch (err) {
    yield put(getAppointmentError(err));
  }
}

function* addAppointmentSaga(payload) {
  try {
    const { appointment } = payload;
    const localAppointment = JSON.parse(
      localStorage.getItem("persist:Appointments")
    ).appointment;
    let currentAppointment = JSON.parse(localAppointment);
    let localContact = JSON.parse(
      JSON.parse(localStorage.getItem("persist:Appointments")).contact
    );
    let contactObj = localContact.contacts.find((c) => c.id == parseInt(appointment.contact));
    appointment.contact = contactObj;
    currentAppointment.appointments.push(appointment);
    currentAppointment.appointmentTotal++;
    yield put(updateAppointmentSuccess(currentAppointment));
  } catch (err) {
    yield put(getAppointmentError(err));
  }
}

function* removeAppointmentSaga(payload) {
  try {
    const { appointment } = payload;
    let localAppointment = JSON.parse(
      JSON.parse(localStorage.getItem("persist:Appointments")).appointment
    );
    let index = localAppointment.appointments.findIndex(
      (appoint) => appoint.id === appointment.id
    );
    localAppointment.appointTotal = localAppointment.appointTotal - 1;
    localAppointment.appointments.splice(index, 1);
    if (localAppointment.appointments.length === 0) {
      localAppointment.appointments = [];
      localAppointment.appointTotal = 0;
    }
    yield put(updateAppointmentSuccess(localAppointment));
  } catch (err) {
    yield put(getAppointmentError(err));
  }
}


function* clearAppointmentSaga() {
  try {
    const emptyAppointment = {
      appointments: [],
      appointmentTotal: 0,
    };
    yield put(updateAppointmentSuccess(emptyAppointment));
  } catch (err) {
    yield put(updateAppointmentError(err));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.GET_APPOINTMENT, getAppointmentSaga)]);
  yield all([takeEvery(actionTypes.ADD_APPOINTMENT, addAppointmentSaga)]);
  yield all([takeEvery(actionTypes.REMOVE_APPOINTMENT, removeAppointmentSaga)]);
  yield all([takeEvery(actionTypes.CLEAR_APPOINTMENT, clearAppointmentSaga)]);
}
