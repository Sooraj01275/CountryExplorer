import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CountrySlice from "./reducers/CountrySlice";


export const store = configureStore({
  reducer: combineReducers({
    country: CountrySlice
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
