import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import CreatePost from '../post/CreatePost';
import Posts from '../post/Posts';

const Home = () => {
  const { profile, loading } = useSelector((state) => state.auth);
  const [postView, setPostView] = useState(false);

  if (!profile && !loading) {
    return <Navigate to="/create-profile" />;
  }

  const handlePostSubmit = (d) => {
    setPostView(!postView);
  };

  return (
    <div className="home insta-an">
      {postView ? (
        <CreatePost callback={handlePostSubmit} />
      ) : (
        <div className="create-post-trig" onClick={() => setPostView(!postView)}>
          <h4>Create a Post !!</h4>
          <i className="material-icons">add_a_photo</i>
        </div>
      )}
      <Posts />
    </div>
  );
};

export default Home;
