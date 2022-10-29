import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from "../../redux/actions/contactAction";

export default function AddContak() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const { detailContact } = useSelector((state) => state.contact);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(detailContact).length > 0) {
            dispatch(updateContact({ id: detailContact.id, name, phoneNumber }));
        } else {
            dispatch(addContact({ name, phoneNumber }));
        }
        setName("");
        setPhoneNumber("");
    };

    useEffect(() => {
        if (Object.keys(detailContact).length > 0) {
            setName(detailContact.name);
            setPhoneNumber(detailContact.phoneNumber);
        }
    }, [detailContact]);

    return (
        <div style={{ marginBottom: 24, width: "25%" }}>
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
                    style={{ padding: "12px 16px", borderRadius: 8, border: "1px solid #ccc" }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

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
            </form>
        </div>
    );
}
