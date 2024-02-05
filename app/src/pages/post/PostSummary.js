import React from 'react';
import { getImage, getImagebyid } from '../../utils/imagebuilder';

const PostSummary = ({ post }) => {
  return (
    <div className="post-smry">
      <div className="post-hdr">
        <div className="avatar">
          <img
            src={getImage(post?.user?.profData)}
            alt={post?.user?.profData?.info?.name}
          />
        </div>
        <div className="avatar-info">
          <h1>{post?.user?.profData?.info?.name}</h1>
          <p>{new Date(post?.timeStamp).toLocaleString()}</p>
        </div>
      </div>
      <div className="post-body">
        <div className="caption" style={{ color: 'blue' }}>
          {post?.caption}
        </div>
        <div
          className={`post-imgs${post?.images?.length > 1 ? ' scroll' : ''}`}
        >
          {post?.images?.map((itm) => (
            <img src={getImagebyid(itm)} alt="FitSync App Post" key={itm?.id} />
          ))}
        </div>
      </div>
      <div className="post-bottom">
        <div className="actions">
          <div className="action-itms">
            <i className="material-icons">favorite_border</i>
          </div>
          <div className="action-itms">
            <i className="material-icons">comment</i>
          </div>
          <div className="action-itms">
            <i className="material-icons">bookmark_border</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSummary;
