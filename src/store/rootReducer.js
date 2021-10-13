import { combineReducers } from 'redux';
import contact from './contact/reducer';
import appointment from './appointment/reducer';

export default combineReducers({
    contact,
    appointment
});
