import { configureStore } from '@reduxjs/toolkit'
import { beApi } from './beApi'
import { persistStore } from 'redux-persist'
import reducers from './reducers'

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(beApi.middleware),
})

export const persistor = persistStore(store)
export default store