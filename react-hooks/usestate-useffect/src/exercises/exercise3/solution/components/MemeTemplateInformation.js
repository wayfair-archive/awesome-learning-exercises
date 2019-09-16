import React from 'react';

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
    <ul>
      {props.selectedMemeDetails.aliases.map(
        (alias) => (
          // Don't have to do this split and join
          // Added here just to make it look pretty
          <li key={alias}>
            {alias.split('-').join(' ')}
          </li>
        )
      )}
    </ul>
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
