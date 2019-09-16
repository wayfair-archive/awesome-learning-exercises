import React, {
  useEffect,
  useState
} from 'react';
import { getMemeTemplates } from './../../utilities';
import ObjectDropdown from '../../components/ObjectDropdown';

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
    <ObjectDropdown
      data={memeTemplates}
      onChange={onSelectChange}
    />
  );
};

export default MemeTemplates;
