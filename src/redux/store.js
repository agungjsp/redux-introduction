import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./reducers/Contact";

export default configureStore({
    reducer: {
        contact: ContactReducer,
    },
});
