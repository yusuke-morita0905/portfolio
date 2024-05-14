import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";

interface State {
  email: string
}

const initialState: State = {
  email: '',
};

export const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {},
});