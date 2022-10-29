import {
    ADD_CONTACT,
    DELETE_CONTACT,
    DETAIL_CONTACT,
    GET_CONTACTS,
    UPDATE_CONTACT,
} from "../../actions/types";

const initialState = {
    contacts: [],
    detailContact: {},
};

export default function ContactReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            console.log("4. GET_CONTACTS", action);
            return {
                ...state,
                contacts: action.payload,
            };
        case ADD_CONTACT:
            console.log("4. ADD_CONTACT", action);
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case DELETE_CONTACT:
            console.log("4. DELETE_CONTACT", action);
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload),
            };
        case DETAIL_CONTACT:
            console.log("4. DETAIL_CONTACT", action);
            return {
                ...state,
                detailContact: action.payload,
            };
        case UPDATE_CONTACT:
            console.log("4. UPDATE_CONTACT", action);
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === action.payload.id ? (contact = action.payload) : contact
                ),
            };

        default:
            return state;
    }
}
