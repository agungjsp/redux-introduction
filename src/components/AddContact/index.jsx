import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from "../../redux/actions/contactAction";

export default function AddContak() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const { detailContact } = useSelector((state) => state.contact);
    const [isError, setIsError] = useState(false);
    const [isErrorUpdate, setIsErrorUpdate] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && phoneNumber) {
            if (Object.keys(detailContact).length > 0) {
                dispatch(updateContact({ id: detailContact.id, name, phoneNumber }, setIsErrorUpdate));
            } else {
                dispatch(addContact({ name, phoneNumber }, setIsError));
            }
            setName("");
            setPhoneNumber("");
            setIsError(false);
            setIsErrorUpdate(false);
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    };

    useEffect(() => {
        if (Object.keys(detailContact).length > 0) {
            setName(detailContact.name);
            setPhoneNumber(detailContact.phoneNumber);
        }
    }, [detailContact]);

    return (
        <div style={{ marginBottom: 24, width: "300px" }}>
            <h4>Add Contact</h4>
            <form onSubmit={(e) => handleSubmit(e)} style={{ display: "flex", flexDirection: "column" }}>
                <input
                    type="text"
                    name="name"
                    value={name || ""}
                    placeholder="Name"
                    style={{
                        padding: "12px 16px",
                        borderRadius: 8,
                        border: "1px solid #ccc",
                    }}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber || ""}
                    placeholder="Phone Number"
                    maxLength={13}
                    style={{ padding: "12px 16px", borderRadius: 8, border: "1px solid #ccc" }}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""))}
                />
                {isEmpty ? <small style={{ color: "red", marginTop: 12 }}>Please fill all field</small> : ""}
                <button
                    type="submit"
                    style={{
                        border: 0,
                        backgroundColor: "#4599df",
                        borderRadius: 8,
                        padding: "10px 16px",
                        color: "#fff",
                        fontWeight: "bold",
                        marginTop: 24,
                    }}
                >
                    {Object.keys(detailContact).length > 0 ? "Update" : "Submit"}
                </button>

                {isError || isErrorUpdate ? (
                    <small style={{ color: "red", marginTop: 12 }}>Something went wrong. Please try again.</small>
                ) : (
                    ""
                )}
            </form>
        </div>
    );
}
