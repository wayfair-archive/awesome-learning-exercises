import React, { useState } from 'react';
import { Field } from '../../../exercise1/solution/part2Solution';

const MemeCreator = (props) => {
  const {
    baseImgUrl,
    selectedMemeDetails
  } = props;
  const [topText, updateTopText] = useState();
  const [
    bottomText,
    updateBottomText
  ] = useState();
  const [imageUrl, updateImageUrl] = useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newImageUrl = `${baseImgUrl}/${topText}/${bottomText}.jpg`;
    updateImageUrl(newImageUrl);
  };
  return (
    <form
      className="Form"
      onSubmit={handleFormSubmit}
    >
      <Field
        label="Top Text"
        onChange={(e) =>
          updateTopText(e.target.value)
        }
        name="topText"
        value={topText}
      />
      <Field
        label="Bottom Text"
        onChange={(e) =>
          updateBottomText(e.target.value)
        }
        name="bottomText"
        value={bottomText}
      />
      {imageUrl && (
        <div>
          <img
            alt="Example of a meme"
            src={imageUrl}
            width="50%"
          />
        </div>
      )}
      <button className="Form-submitButton">
        Submit
      </button>
    </form>
  );
};

export default MemeCreator;
