import React from 'react';

const ObjectDropdown = (props) => (
  <select onChange={props.onChange}>
    {Object.keys(props.data).length > 0 ? (
      Object.keys(props.data).map((objectKey) => (
        <option
          key={objectKey}
          value={props.data[objectKey]}
        >
          {objectKey}
        </option>
      ))
    ) : (
      <option value="">Loading data...</option>
    )}
  </select>
);

export default ObjectDropdown;
