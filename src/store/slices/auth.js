import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  // TODO set undefined
  token: 'asdasdasd',
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

export const { setIsLoading, setUserInfo, setToken } = slice.actions;
// -----------------------------------
// Actions
// -----------------------------------


const getUserInfo = () => async (dispatch) => {
  dispatch(setIsLoading(true));
};

const onLogin = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setUserInfo(data))
  dispatch(setToken(data.token));
  dispatch(setIsLoading(false));
};

const onLogout = () => (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setUserInfo({}))
  dispatch(setToken(undefined));
  dispatch(setIsLoading(false));
};

export const actions = {
  getUserInfo,
  onLogin,
  onLogout,
};

export default slice.reducer;
