import { all } from 'redux-saga/effects';
import ContactSaga from './contacts/saga';
import AppointmentSaga from './appointments/saga';

export default function* rootSaga() {
    yield all([
        ContactSaga(),
        AppointmentSaga(),
    ]);
}
