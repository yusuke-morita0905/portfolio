import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';

interface State {
  home: string
}

const initialState: State = {
  home: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});
