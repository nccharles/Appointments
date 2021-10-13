import { all } from 'redux-saga/effects';
import ContactSaga from './contact/saga';
import AppointmentSaga from './appointment/saga';

export default function* rootSaga() {
    yield all([
        ContactSaga(),
        AppointmentSaga(),
    ]);
}
