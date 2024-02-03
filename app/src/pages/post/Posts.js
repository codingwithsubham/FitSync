import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/post/postEffects';
import PostSummary from './PostSummary';
import Loader from '../../components/layout/Loader';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, postLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [fetchPosts]);

  return (
    <div className="posts-wrap">
      {postLoading ? (
        <Loader />
      ) : (
        posts?.map((itm, idx) => <PostSummary post={itm} key={idx} />)
      )}
    </div>
  );
};

export default Posts;
