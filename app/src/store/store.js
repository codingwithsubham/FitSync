import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import alertSlice from './alert/alertSlice';
import profileSlice from './profile/profileSlice';
import postSlice from './post/postSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    alert: alertSlice,
    profile: profileSlice,
    post: postSlice,
  },
});