import { combineReducers } from 'redux';
import contact from './contacts/reducer';
import appointment from './appointments/reducer';

export default combineReducers({
    contact,
    appointment
});
