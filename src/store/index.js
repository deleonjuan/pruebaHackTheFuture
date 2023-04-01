import { configureStore } from '@reduxjs/toolkit'
import { beApi } from './beApi'
// reducers
import authReducer from './slices/auth'

export const store = configureStore({
  reducer: {
    [beApi.reducerPath]: beApi.reducer,
    authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beApi.middleware),
})