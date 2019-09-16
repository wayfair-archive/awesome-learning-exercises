import React from 'react';

const MemeAliases = (props) => (
  <ul>
    {props.memeAliases.map((alias, key) => (
      <li key={key}>
        {alias.split('-').join(' ')}
      </li>
    ))}
  </ul>
);

export default MemeAliases;
