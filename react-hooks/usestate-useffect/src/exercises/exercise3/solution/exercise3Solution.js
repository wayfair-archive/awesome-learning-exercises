import React, {
  useEffect,
  useState
} from 'react';
import { getMemeInformation } from './../utilities';
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
  // Bonus: Get our example meme URL
  let imageUrl;
  let baseImgUrl;
  if (selectedMemeDetails) {
    const memegenUrl = 'https://memegen.link/';
    const imageUrlSplit = selectedMemeDetails.example.split(
      '/'
    );
    // The indices at which
    // the important parts of the image URL
    // live in will always be the same (5, 6, 7)
    const templateName = imageUrlSplit[5];
    const textPart1 = imageUrlSplit[6];
    const textPart2 = imageUrlSplit[7];
    // Save this for later to pass to the meme creator
    baseImgUrl = `${memegenUrl}/${templateName}`;
    // Need to add .jpg at the end
    imageUrl = `${baseImgUrl}/${textPart1}/${textPart2}.jpg`;
  }
  return (
    <section>
      <MemeTemplatesDropdown
        onSelectChange={handleSelectChange}
      />
      {selectedMemeDetails && (
        <MemeTemplateInformation
          imageUrl={imageUrl}
          selectedMemeDetails={
            selectedMemeDetails
          }
        />
      )}
      {selectedMemeDetails && (
        <MemeCreator
          baseImgUrl={baseImgUrl}
          selectedMemeDetails={
            selectedMemeDetails
          }
        />
      )}
    </section>
  );
};

export default MemeGenerator;
