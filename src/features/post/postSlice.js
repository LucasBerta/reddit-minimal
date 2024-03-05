import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './postAPI';

const initialState = {
  data: [],
  status: 'idle',
};

export const LoadData = createAsyncThunk('post/fetchPost', async amount => {
  const response = await fetchPosts(amount);
  return response.data;
});

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(LoadData.pending, state => {
        state.status = 'loading';
      })
      .addCase(LoadData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data += action.payload;
      });
  },
});

export const { setData } = postSlice.actions;

export const selectPost = state => state.post.data;

export default postSlice.reducer;
