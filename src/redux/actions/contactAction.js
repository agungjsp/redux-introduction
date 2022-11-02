import axios from "axios";
import { ADD_CONTACT, DELETE_CONTACT, DETAIL_CONTACT, GET_CONTACTS, UPDATE_CONTACT } from "./types";

export const getContacts = (setIsError) => async (dispatch) => {
    console.log("2. getContacts Action");
    setIsError(false);
    try {
        const res = await axios.get("http://localhost:3000/contacts");
        console.log("3. Data fetching", res.data);
        dispatch({
            type: GET_CONTACTS,
            payload: res.data,
        });
    } catch (error) {
        console.log("3. Data fetching error", error.message);
        setIsError(true);
        dispatch({
            type: GET_CONTACTS,
            payload: [],
        });
    }
};

export const addContact = (data, setIsError) => async (dispatch) => {
    console.log("2. addContacts Action", data);
    setIsError(false);
    try {
        const res = await axios.post("http://localhost:3000/contacts", data);
        console.log("3. Data fetching", res.data);
        dispatch({
            type: ADD_CONTACT,
            payload: res.data,
        });
    } catch (error) {
        console.log("[addContact] 3. Data fetching error", error.message);
        setIsError(true);
    }
};

export const deleteContact = (id, setIsErrorDelete) => async (dispatch) => {
    console.log("2. deleteContacts Action", id);
    setIsErrorDelete(false);
    try {
        await axios.delete(`http://localhost:3000/contacts/${id}`);
        console.log("3. Data fetching");
        dispatch({
            type: DELETE_CONTACT,
            payload: id,
        });
    } catch (error) {
        console.log("3. Data fetching error", error.message);
        setIsErrorDelete(true);
    }
};

export const detailContact = (id, setIsErrorDetail) => async (dispatch) => {
    console.log("2. detailContacts Action", id);
    setIsErrorDetail(false);
    try {
        const res = await axios.get(`http://localhost:3000/contacts/${id}`);
        console.log("3. Data fetching", res.data);
        dispatch({
            type: DETAIL_CONTACT,
            payload: res.data,
        });
    } catch (error) {
        console.log("3. Data fetching error", error.message);
        setIsErrorDetail(true);
    }
};

export const updateContact = (data, setIsErrorUpdate) => async (dispatch) => {
    console.log("2. updateContacts Action", data);
    setIsErrorUpdate(false);
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
    } catch (error) {
        console.log("3. Data fetching error", error.message);
        setIsErrorUpdate(true);
    }
};
