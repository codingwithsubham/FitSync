import React, { Fragment, useState } from 'react';
import { getImage, getImagebyid } from '../../utils/imagebuilder';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { approveMatch, requestMatch } from '../../store/profile/profileEffects';

const Profile = ({ profileData, isSelf }) => {
  const { id } = useParams();
  const { profile } = useSelector((state) => state.auth);
  const myProfile = profile?.profData;
  const dispatch = useDispatch();
  const [tab, setTab] = useState('tab1');

  const isMatchedorRequested = () => {
    if (myProfile?.matchRequests?.includes(id)) {
      return (
        <div className="btn-grp fw">
          <button
            className="btn waves-effect waves-light green"
            onClick={() => dispatch(approveMatch(id))}
          >
            Approve Match Request
          </button>
        </div>
      );
    } else if (myProfile?.matchRequested?.includes(id)) {
      return (
        <div className="btn-grp fw">
          <button className="btn waves-effect waves-light" disabled>
            Match Requested
          </button>
        </div>
      );
    } else if (myProfile?.matches?.includes(id)) {
      return (
        <div className="btn-grp fw">
          <Link
            to={`/chat/${id}`}
            className="btn waves-effect waves-light purple"
          >
            Send message
          </Link>
        </div>
      );
    } else {
      return (
        <div className="btn-grp fw">
          <button
            className="btn waves-effect waves-light"
            onClick={() => dispatch(requestMatch(id))}
          >
            Add a Match
          </button>
        </div>
      );
    }
  };

  return (
    <div className="profile-view insta-an">
      <div className="profile-card display-head">
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-image">
                <img src={getImage(profileData)} alt={''} />
                <div className="content">
                  <span className="card-title">
                    {profileData?.info?.name}
                    <i className="material-icons">check_circle</i>
                  </span>
                  <p className="card-desc">
                    {profileData?.info?.age}yrs, {profileData?.info?.body}cm{' '}
                    <span className="blt" />
                    {profileData?.info?.religion} <span className="blt" />
                    {profileData?.info?.cast} <br />
                    {profileData?.info?.city}, {profileData?.info?.state}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="action-types">
        {isSelf ? (
          <div className="btn-grp">
            <Link to="/edit-profile" className="btn waves-effect waves-light">
              Edit Profile
            </Link>
            <Link to="/add-photos" className="btn waves-effect waves-light">
              Add Photos
            </Link>
          </div>
        ) : (
          isMatchedorRequested()
        )}
      </div>
      <div className="prodile-desc">
        <p>
          I’m {profileData?.info?.age} years old, with a medium assemble and a
          constructive outlook within the course of life. My Work type is{' '}
          {profileData?.info?.work}. According to family, I’m a daring,
          self-made, down-to-earth specific particular person. I'm a fitness
          person, Love to stay fit and Balance my Work Life at{' '}
          {profileData?.info?.city}, {profileData?.info?.state}.<br />
          {profileData?.info?.about}.
        </p>
        <div className="row prfile-tabs-wrap">
          <div className="col s12">
            <ul className="tabs">
              <li
                className={`tab col s3${
                  tab === 'tab1' ? ' active fade-an' : ''
                }`}
                onClick={() => setTab('tab1')}
              >
                <Link>
                  <i className="material-icons">gradient</i>
                </Link>
              </li>
              <li
                className={`tab col s3${
                  tab === 'tab2' ? ' active fade-an' : ''
                }`}
                onClick={() => setTab('tab2')}
              >
                <Link>
                  <i className="material-icons">insert_photo</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {tab === 'tab1' && (
          <Fragment>
            <div className="form-break">
              <div className="counter-frm-brk">01</div>
              <div className="text-frm-brk">Personal Details</div>
            </div>
            <div className="content">
              <b>Name : &nbsp;</b>
              <span>{profileData?.info?.name}</span>
              <b>Age : &nbsp;</b>
              <span>{profileData?.info?.age}</span>
              <b>Sex : &nbsp;</b>
              <span>{profileData?.info?.gender}</span>
              <b>About : &nbsp;</b>
              <span>{profileData?.info?.about}</span>
            </div>
            <div className="form-break">
              <div className="counter-frm-brk">02</div>
              <div className="text-frm-brk">Work Details</div>
            </div>
            <div className="content">
              <b>Job Type : &nbsp;</b>
              <span>{profileData?.info?.work}</span>
              <b>Sector : &nbsp;</b>
              <span>{profileData?.info?.workSector}</span>
              <b>Company: &nbsp;</b>
              <span>{profileData?.info?.companyName}</span>
            </div>
            <div className="form-break">
              <div className="counter-frm-brk">03</div>
              <div className="text-frm-brk">Location Details</div>
            </div>
            <div className="content">
              <b>City : &nbsp;</b>
              <span>{profileData?.info?.city}</span>
              <b>State : &nbsp;</b>
              <span>{profileData?.info?.state}</span>
            </div>
          </Fragment>
        )}
      </div>
      {tab === 'tab2' && (
        <div className="profile-photos">
          {profileData?.imgs?.map((itm, idx) => (
            <div className="img-wrper" key={idx}>
              <img src={getImagebyid(itm)} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
