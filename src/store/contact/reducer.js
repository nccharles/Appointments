import { actionTypes } from './action';

export const initContact = {
    contacts: [],
    contactTotal: 0,
};

function reducer(state = initContact, action) {
    switch (action.type) {
        case actionTypes.GET_CONTACT_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.UPDATE_CONTACT_SUCCESS:
            return {
                ...state,
                ...{ contacts: action.payload.contacts },
                ...{ contactTotal: action.payload.contactTotal },
            };
        case actionTypes.CLEAR_CONTACT_SUCCESS:
            return {
                ...state,
                ...{ contacts: action.payload.contacts },
                ...{ contactTotal: action.payload.contactTotal },
            };
        case actionTypes.GET_CONTACT_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.UPDATE_CONTACT_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;