import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileUploader from '../../components/common/FileUploader';
import Form from '../../components/common/Form';
import { postFormData } from './options';
import { createNewPost } from '../../store/post/postEffects';

const CreatePost = ({ callback }) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [images, setImages] = useState('');
  const handleImagesUrls = (data) => {
    setImages(data);
    setStep(2);
  };

  const submitForm = (d) => {
    dispatch(createNewPost({
        caption: d?.caption,
        images: images,
    }))
    callback();
  };

  return (
    <div className="photos-upload create-post insta-an">
      <div className="img-uploader">
        <h1>What's on your mind ?</h1>
        <p>Let's start by converting that into words</p>
        <br />
        {step === 1 && (
          <FileUploader
            callBack={handleImagesUrls}
            options={{ btnText: 'Next' }}
          />
        )}
        {step === 2 && <Form data={postFormData} callBack={submitForm} />}
      </div>
    </div>
  );
};

export default CreatePost;
