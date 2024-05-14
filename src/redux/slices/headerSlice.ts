import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';

interface State {
  siteName: string
}

const initialState: State = {
  siteName: 'yusuke morita portfolio',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
});
