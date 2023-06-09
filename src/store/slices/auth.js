import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  token: undefined,
  userInfo: {},
};

const reducers = {
  setIsLoading: (state, { payload }) => {
    state.loader = payload;
  },
  setUserInfo: (state, { payload }) => {
    state.userInfo = payload;
  },
  setToken: (state, { payload }) => {
    state.token = payload;
  },
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const { setIsLoading, setUserInfo, setToken, cleanData } = slice.actions;
// -----------------------------------
// Actions
// -----------------------------------

const onLogin = (data) => (dispatch) => {
  dispatch(setUserInfo(data));
  dispatch(setToken(data.token));
};

export const actions = {
  onLogin,
};

export default slice.reducer;
