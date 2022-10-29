import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, detailContact, getContacts } from "../../redux/actions/contactAction";

export default function ListContact() {
    const { contacts } = useSelector((state) => state.contact);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("1. ListContact useEffect");
        dispatch(getContacts());
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
                                onClick={() => dispatch(detailContact(contact.id))}
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
                                onClick={() => dispatch(deleteContact(contact.id))}
                            >
                                <b>Delete</b>
                            </button>
                        </p>
                    </div>
                ))
            ) : (
                <p>No data contact</p>
            )}
        </div>
    );
}
