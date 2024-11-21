import { configureStore } from "@reduxjs/toolkit";
import  usersSlice from "./users/UsersSlice";

export default configureStore({
    reducer : {
        users : usersSlice
    }
})