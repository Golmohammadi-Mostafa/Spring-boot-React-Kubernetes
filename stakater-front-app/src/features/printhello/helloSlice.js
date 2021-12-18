import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fethHello } from './helpAPI';

const initialState = {
  status: 'idle',
  value: null,
};
export const incrementAsync = createAsyncThunk(
  'hello/fetchHello',
  async (amount) => {
    const response = await fethHello(amount);
    console.log('response', response);
    return response;
  }
);

export const helloSlice = createSlice({
  name: 'helloworld',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { incrementByAmount } = helloSlice.actions;

export default helloSlice.reducer;
