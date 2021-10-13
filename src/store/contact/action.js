export const actionTypes = {
    GET_CONTACT: 'GET_CONTACT',
    GET_CONTACT_SUCCESS: 'GET_CONTACT_SUCCESS',
    GET_CONTACT_ERROR: 'GET_CONTACT_ERROR',

    GET_CONTACT_TOTAL: 'GET_CONTACT_TOTAL',
    GET_CONTACT_TOTAL_SUCCESS: 'GET_CONTACT_TOTAL_SUCCESS',

    ADD_CONTACT: 'ADD_CONTACT',
    REMOVE_CONTACT: 'REMOVE_CONTACT',

    CLEAR_CONTACT: 'CLEAR_CONTACT',
    CLEAR_CONTACT_SUCCESS: 'CLEAR_CONTACT_SUCCESS',
    CLEAR_CONTACT_ERROR: 'CLEAR_CONTACT_ERROR',

    
    UPDATE_CONTACT: 'UPDATE_CONTACT',
    UPDATE_CONTACT_SUCCESS: 'UPDATE_CONTACT_SUCCESS',
    UPDATE_CONTACT_ERROR: 'UPDATE_CONTACT_ERROR',
};

export function getContact() {
    return { type: actionTypes.GET_CONTACT };
}

export function getContactSuccess() {
    return {
        type: actionTypes.GET_CONTACT_SUCCESS,
    };
}

export function getContactError(error) {
    return {
        type: actionTypes.GET_CONTACT_ERROR,
        error,
    };
}

export function addContact(product) {
    return { type: actionTypes.ADD_CONTACT, product };
}

export function removeContact(product) {
    return { type: actionTypes.REMOVE_CONTACT, product };
}


export function updateContactSuccess(payload) {
    return {
        type: actionTypes.UPDATE_CONTACT_SUCCESS,
        payload,
    };
}

export function clearContactSuccess(payload) {
    return {
        type: actionTypes.CLEAR_CONTACT_SUCCESS,
        payload,
    };
}

export function updateContactError(payload) {
    return {
        type: actionTypes.UPDATE_CONTACT_ERROR,
        payload,
    };
}
