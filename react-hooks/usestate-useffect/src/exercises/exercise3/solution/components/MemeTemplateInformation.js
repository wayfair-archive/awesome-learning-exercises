import React from 'react';
import MemeAliases from './../../components/MemeAliases';

const MemeTemplateInformation = (props) => (
  <article>
    <h2>Selected Meme Information</h2>
    <p>
      <b>Meme Name:</b>{' '}
      {props.selectedMemeDetails.name}
    </p>
    <p>
      <b>Meme Aliases:</b>
    </p>
    <MemeAliases
      memeAliases={
        props.selectedMemeDetails.aliases
      }
    />
    <p>
      <a
        href={
          props.selectedMemeDetails.description
        }
      >
        Meme Description
      </a>
    </p>
    <p>
      <b>Meme Example:</b>
    </p>
    {props.imageUrl && (
      <img
        alt={`Example of ${
          props.selectedMemeDetails.name
        }`}
        src={props.imageUrl}
        width="50%"
      />
    )}
  </article>
);

export default MemeTemplateInformation;
