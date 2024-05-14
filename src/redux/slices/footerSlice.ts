import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";

interface State {
  copyright: string
}

const initialState: State = {
  copyright: '',
};

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});
