import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { headerSlice } from "../redux/slices/headerSlice";
import { footerSlice } from "../redux/slices/footerSlice";
import { homeSlice } from "../redux/slices/homeSlice";
import { contactFormSlice } from "../redux/slices/contactFormSlice";
import { firstViewSlice } from "../redux/slices/firstViewSlice";

export const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
    firstView: firstViewSlice.reducer,
    home: homeSlice.reducer,
    contactForm: contactFormSlice.reducer,
    footer: footerSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootAppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootAppState> = useSelector;