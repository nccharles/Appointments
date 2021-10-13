export const actionTypes = {
    GET_APPOINTMENT: 'GET_APPOINTMENT',
    GET_APPOINTMENT_SUCCESS: 'GET_APPOINTMENT_SUCCESS',
    GET_APPOINTMENT_ERROR: 'GET_APPOINTMENT_ERROR',

    GET_APPOINTMENT_TOTAL: 'GET_APPOINTMENT_TOTAL',
    GET_APPOINTMENT_TOTAL_SUCCESS: 'GET_APPOINTMENT_TOTAL_SUCCESS',

    ADD_APPOINTMENT: 'ADD_APPOINTMENT',
    REMOVE_APPOINTMENT: 'REMOVE_APPOINTMENT',

    CLEAR_APPOINTMENT: 'CLEAR_APPOINTMENT',
    CLEAR_APPOINTMENT_SUCCESS: 'CLEAR_APPOINTMENT_SUCCESS',
    CLEAR_APPOINTMENT_ERROR: 'CLEAR_APPOINTMENT_ERROR',

    
    UPDATE_APPOINTMENT: 'UPDATE_APPOINTMENT',
    UPDATE_APPOINTMENT_SUCCESS: 'UPDATE_APPOINTMENT_SUCCESS',
    UPDATE_APPOINTMENT_ERROR: 'UPDATE_APPOINTMENT_ERROR',
};

export function getAppointment() {
    return { type: actionTypes.GET_APPOINTMENT };
}

export function getAppointmentSuccess() {
    return {
        type: actionTypes.GET_APPOINTMENT_SUCCESS,
    };
}

export function getAppointmentError(error) {
    return {
        type: actionTypes.GET_APPOINTMENT_ERROR,
        error,
    };
}

export function addAppointment(appointment) {
    return { type: actionTypes.ADD_APPOINTMENT, appointment };
}

export function removeAppointment(appointment) {
    return { type: actionTypes.REMOVE_APPOINTMENT, appointment };
}


export function updateAppointmentSuccess(payload) {
    return {
        type: actionTypes.UPDATE_APPOINTMENT_SUCCESS,
        payload,
    };
}

export function clearAppointmentSuccess(payload) {
    return {
        type: actionTypes.CLEAR_APPOINTMENT_SUCCESS,
        payload,
    };
}

export function updateAppointmentError(payload) {
    return {
        type: actionTypes.UPDATE_APPOINTMENT_ERROR,
        payload,
    };
}
