import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import uiStateSlice from "./slices/uiStateSlice";
import searchCretieriaSlice from "./slices/searchCriteriaSlice";

const store = configureStore({
  reducer: {
    uiSlice: uiStateSlice.reducer,
    searchCriteria: searchCretieriaSlice.reducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
