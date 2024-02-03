import axios from 'axios';
import { DANGER, SUCCESS } from '../../common/appConstants';
import { displayAlert } from '../alert/alertEffects';
import { API_CONFIG } from '../../common/constants';
import { createPost, getPosts, postFetching } from './postSlice';
import {
  API_ROUTE_PUB,
  CREATE_POST,
  GET_POSTS,
} from '../../common/apiContants';

// Create Profile
export const createNewPost = (body) => async (dispatch) => {
  try {
    dispatch(postFetching());
    const res = await axios.post(
      `${API_ROUTE_PUB}${CREATE_POST}`,
      body,
      API_CONFIG
    );
    dispatch(createPost(res.data));
    dispatch(displayAlert('Posted Successfully !!', SUCCESS));
  } catch (err) {
    dispatch(displayAlert('Can not Post !!', DANGER));
  }
};

// Get Posts
export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(postFetching());
    const res = await axios.get(`${API_ROUTE_PUB}${GET_POSTS}`, API_CONFIG);
    dispatch(getPosts(res.data));
  } catch (err) {
    dispatch(displayAlert('Can not fetch Posts !!', DANGER));
  }
};
