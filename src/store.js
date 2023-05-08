import { configureStore } from "@reduxjs/toolkit";
import accordianSlice from "./slice/accordianSlice";

const store = configureStore({
    reducer:{
        accordian: accordianSlice,
    }
})

export default store;