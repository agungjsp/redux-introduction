import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, detailContact, getContacts } from "../../redux/actions/contactAction";

export default function ListContact() {
    const { contacts } = useSelector((state) => state.contact);
    const [isError, setIsError] = useState(false);
    const [isErrorDetail, setIsErrorDetail] = useState(false);
    const [isErrorDelete, setIsErrorDelete] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("1. ListContact useEffect");
        dispatch(getContacts(setIsError));
    }, [dispatch]);

    return (
        <div>
            <h4>List Contact</h4>
            {contacts.length > 0 ? (
                contacts.map((contact) => (
                    <div key={contact.id}>
                        <p>
                            {contact.name} - {contact.phoneNumber}
                            <button
                                style={{
                                    padding: "8px 12px",
                                    border: 0,
                                    borderRadius: 8,
                                    backgroundColor: "#eab73e",
                                    color: "#fff",
                                    marginLeft: 12,
                                }}
                                onClick={() => dispatch(detailContact(contact.id, setIsErrorDetail))}
                            >
                                <b>Update</b>
                            </button>
                            <button
                                style={{
                                    padding: "8px 12px",
                                    border: 0,
                                    borderRadius: 8,
                                    backgroundColor: "#e88675",
                                    color: "#fff",
                                    marginLeft: 12,
                                }}
                                onClick={() => dispatch(deleteContact(contact.id, setIsErrorDelete))}
                            >
                                <b>Delete</b>
                            </button>
                        </p>
                        <small style={{ color: "red" }}>
                            {isErrorDelete || isErrorDetail ? "Something went wrong. Please try again." : ""}
                        </small>
                    </div>
                ))
            ) : isError ? (
                <p>Something went wrong. Please try again.</p>
            ) : (
                <p>No data contact</p>
            )}
        </div>
    );
}
