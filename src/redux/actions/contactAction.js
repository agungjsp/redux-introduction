import axios from "axios";
import { ADD_CONTACT, DELETE_CONTACT, DETAIL_CONTACT, GET_CONTACTS, UPDATE_CONTACT } from "./types";

export const getContacts = () => async (dispatch) => {
    console.log("2. getContacts Action");
    try {
        const res = await axios.get("http://localhost:3000/contacts");
        console.log("3. Data fetching", res.data);
        dispatch({
            type: GET_CONTACTS,
            payload: res.data,
        });
    } catch {
        console.log("3. Data fetching error", error.message);
        dispatch({
            type: GET_CONTACTS,
            payload: [],
        });
    }
};

export const addContact = (data) => async (dispatch) => {
    console.log("2. addContacts Action", data);
    try {
        const res = await axios.post("http://localhost:3000/contacts", data);
        console.log("3. Data fetching", res.data);
        dispatch({
            type: ADD_CONTACT,
            payload: res.data,
        });
    } catch {
        console.log("3. Data fetching error", error.message);
        dispatch({
            type: ADD_CONTACT,
            payload: [],
        });
    }
};

export const deleteContact = (id) => async (dispatch) => {
    console.log("2. deleteContacts Action", id);
    try {
        await axios.delete(`http://localhost:3000/contacts/${id}`);
        console.log("3. Data fetching");
        dispatch({
            type: DELETE_CONTACT,
            payload: id,
        });
    } catch {
        console.log("3. Data fetching error", error.message);
        dispatch({
            type: DELETE_CONTACT,
            payload: [],
        });
    }
};

export const detailContact = (id) => async (dispatch) => {
    console.log("2. detailContacts Action", id);
    try {
        const res = await axios.get(`http://localhost:3000/contacts/${id}`);
        console.log("3. Data fetching", res.data);
        dispatch({
            type: DETAIL_CONTACT,
            payload: res.data,
        });
    } catch {
        console.log("3. Data fetching error", error.message);
        dispatch({
            type: DETAIL_CONTACT,
            payload: [],
        });
    }
};

export const updateContact = (data) => async (dispatch) => {
    console.log("2. updateContacts Action", data);
    try {
        const res = await axios.put(`http://localhost:3000/contacts/${data.id}`, data);
        console.log("3. Data fetching", res.data);
        dispatch({
            type: DETAIL_CONTACT,
            payload: [],
        });
        dispatch({
            type: UPDATE_CONTACT,
            payload: res.data,
        });
    } catch {
        console.log("3. Data fetching error", error.message);
        dispatch({
            type: UPDATE_CONTACT,
            payload: [],
        });
    }
};
