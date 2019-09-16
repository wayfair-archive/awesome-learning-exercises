import React, {
  useEffect,
  useState
} from 'react';
import { getMemeTemplates } from './../../utilities';

const MemeTemplates = ({ onSelectChange }) => {
  // Set the state of our meme templates
  // from the fetch request
  const [
    memeTemplates,
    setMemeTemplates
  ] = useState({});
  // Run the fetch call only on the initial render
  useEffect(() => {
    getMemeTemplates().then((response) => {
      setMemeTemplates(response);
    });
  }, []);
  return (
    <select onChange={onSelectChange}>
      {Object.keys(memeTemplates).length > 0 ? (
        Object.keys(memeTemplates).map(
          (templateName) => (
            <option
              key={templateName}
              value={memeTemplates[templateName]}
            >
              {templateName}
            </option>
          )
        )
      ) : (
        <option value="">
          Loading meme templates...
        </option>
      )}
    </select>
  );
};

export default MemeTemplates;
