import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name : "users",
    initialState : {
        listUsers : [],
        code : ''
    },
    reducers : {
        getAll : (state , data) => {
            state.listUsers = data.payload;
        },
        uniceCode : (state , data) => {
            state.code = data.payload;
            window.localStorage.setItem('userCodeID' , state.code);
        }
    }
});

export const  { getAll ,uniceCode } = usersSlice.actions;
export const getAllUsers = state =>state.users.listUsers;
export const getCodeID = state =>state.users.code;
export default usersSlice.reducer;