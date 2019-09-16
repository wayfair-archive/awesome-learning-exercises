import React, {
  useEffect,
  useState
} from 'react';
import {
  getMemeInformation,
  getExampleMemeUrl
} from './../utilities';
import MemeTemplatesDropdown from './components/MemeTemplatesDropdown';
import MemeTemplateInformation from './components/MemeTemplateInformation';
import MemeCreator from './components/MemeCreator';

const MemeGenerator = () => {
  // Hold the state of the link (from the dropdown)
  // and of the meme details from the API
  const [
    selectedMemeLink,
    updateSelectedMemeLink
  ] = useState();
  const [
    selectedMemeDetails,
    updateSelectedMemeDetails
  ] = useState();
  // Handle the dropdown changing
  const handleSelectChange = (event) => {
    updateSelectedMemeLink(event.target.value);
  };
  // Don't run on the initial request, otherwise
  // fetch will not work
  useEffect(() => {
    if (selectedMemeLink) {
      getMemeInformation(selectedMemeLink).then(
        (response) => {
          updateSelectedMemeDetails(response);
        }
      );
    }
  }, [selectedMemeLink]);
  const {
    baseImageUrl,
    exampleImageUrl
  } = getExampleMemeUrl(selectedMemeDetails);
  return (
    <section>
      <MemeTemplatesDropdown
        onSelectChange={handleSelectChange}
      />
      {selectedMemeDetails && (
        <MemeTemplateInformation
          imageUrl={exampleImageUrl}
          selectedMemeDetails={
            selectedMemeDetails
          }
        />
      )}
      {/* Bonus below: Create your own meme */}
      {selectedMemeDetails && (
        <MemeCreator
          baseImageUrl={baseImageUrl}
          selectedMemeDetails={
            selectedMemeDetails
          }
        />
      )}
    </section>
  );
};

export default MemeGenerator;
