import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: false,
  retrieveSaved: ""
};

export const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginState(state, action) {
      state.userLogin = action.payload;
    },
    retrieveSaved (state) {
        state.userLogin = localStorage.getItem('loginStatus')
    }
  },
});
