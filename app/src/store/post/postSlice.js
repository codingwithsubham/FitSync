import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    postLoading: false,
    posts: []
  },
  reducers: {
    postFetching: (state) => {
      return {
        ...state,
        postLoading: true,
      };
    },
    createPost: (state, { payload }) => {
      return {
        ...state,
        postLoading: false,
        posts: [payload, ...state?.posts],
      };
    },
    getPosts: (state, { payload }) => {
      return {
        ...state,
        postLoading: false,
        posts: payload,
      };
    },
  },
});

export const { createPost, postFetching, getPosts } = profileSlice.actions;
export default profileSlice.reducer;
