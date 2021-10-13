
import { actionTypes } from './action';

export const initappointment = {
    appointments: [],
    appointmentTotal: 0,
};

function reducer(state = initappointment, action) {
    switch (action.type) {
        case actionTypes.GET_APPOINTMENT_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.UPDATE_APPOINTMENT_SUCCESS:
            return {
                ...state,
                ...{ appointments: action.payload.appointments },
                ...{ appointmentTotal: action.payload.appointmentTotal },
            };
        case actionTypes.CLEAR_APPOINTMENT_SUCCESS:
            return {
                ...state,
                ...{ appointments: action.payload.appointments },
                ...{ appointmentTotal: action.payload.appointmentTotal },
            };
        case actionTypes.GET_APPOINTMENT_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.UPDATE_APPOINTMENT_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;
