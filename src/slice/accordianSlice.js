import { createSlice } from "@reduxjs/toolkit";

const accordianSlice = createSlice({
    name: 'accordian',
    initialState:{
        first:false,
        second:false,
        third:false,
    }
    ,
    reducers: {
        updateFirstState:(state, action)=>{
            state.first = action.payload;
        console.log(state, action);
    },
    updateSecondState:(state, action)=>{
        state.second = action.payload;
    console.log(state, action);
    },
    updateThirdState:(state, action)=>{
        state.third = action.payload;
    console.log(state, action);
    },
},
})

export default accordianSlice.reducer;
export const {updateFirstState, updateSecondState, updateThirdState} = accordianSlice.actions