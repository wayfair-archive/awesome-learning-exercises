import { useEffect } from "react";

function getLabelSuffix(element) {
  return element.tagName.toLowerCase() === "button" ? "button" : "image";
}

// Adds alt text, aria labels, and
// aria-labelledby text
// near their respective elements.
// This makes it easier
// for learners to see how alternative text
// is shown to assistive technology so that
// they don't need to set it up.
// With a screen reader, this text is duplicative.
// It's extracted to a function so learners can
// comment it out if they want to go through this
// exercise with a screen reader.
// 📣📣📣📣📣 THIS IS NOT MEANT
// 📣📣📣📣📣 TO REPLACE SCREEN READERS!
// Before using this hook for any reason,
// we strongly recommend you enable your
// system's screen reader **FIRST**.
// This hook is meant to be used as a learning
// aid which generally emulates what a screen
// reader __would__ say, but it cannot
// ever be 100% accurate. Please consider
// using your computer's built-in screen
// reader __first__.
function useShowAltTextAfterMedia() {
  useEffect(() => {
    // Get rid of all other elements that were added
    // by previous executions of this effect
    document
      .querySelectorAll(".TempElement")
      .forEach((element) => element.remove());

    // buttons (do this first so it doesn't
    // conflict with other things)
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      const { innerText } = button;
      const caption = document.createElement("span");
      caption.setAttribute("class", "TempElement");
      caption.innerText = `${innerText}, ${getLabelSuffix(button)}`;
      button.insertAdjacentElement("afterend", caption);
    });

    // Find all elements with alt text
    const images = document.querySelectorAll("img[alt]");
    // Next to every image with an "alt" tag, append
    // a caption with the contents of its alt text
    images.forEach((image) => {
      const caption = document.createElement("span");
      caption.setAttribute("class", "TempElement");
      const altText = image.getAttribute("alt");
      // If there's alt text for this image,
      // add it immediately after the image
      if (!!altText) {
        caption.innerText = caption.innerText = `${altText}, ${getLabelSuffix(
          image
        )}`;
        image.insertAdjacentElement("afterend", caption);
      }
    });

    // Find all images without alt text, and label them as "unlabeled image"
    const imagesWithoutAlt = document.querySelectorAll(
      "img:not([alt]):not([aria-labelledby])"
    );
    imagesWithoutAlt.forEach((image) => {
      const caption = document.createElement("span");
      caption.setAttribute("class", "TempElement");
      caption.innerText = "Unlabelled image";
      image.insertAdjacentElement("afterend", caption);
    });

    // aria-label
    const elementsWithLabels = document.querySelectorAll("[aria-label]");
    elementsWithLabels.forEach((element) => {
      const caption = document.createElement("span");
      caption.setAttribute("class", "TempElement");
      const label = element.getAttribute("aria-label");
      // If there's alt text for this image,
      // add it immediately after the image
      if (!!label) {
        caption.innerText = `${label}, ${getLabelSuffix(element)}`;
        element.insertAdjacentElement("afterend", caption);
      }
    });

    // title
    const elementsWithTitles = document.querySelectorAll("[title]");
    elementsWithTitles.forEach((element) => {
      const caption = document.createElement("span");
      caption.setAttribute("class", "TempElement");
      const label = element.getAttribute("title");
      // If there's alt text for this image,
      // add it immediately after the image
      if (!!label) {
        caption.innerText = `${label}, ${getLabelSuffix(element)}`;
        element.insertAdjacentElement("afterend", caption);
      }
    });

    // aria-labelledby
    const elementsWithLabelledBy = document.querySelectorAll(
      "[aria-labelledby]"
    );
    elementsWithLabelledBy.forEach((element) => {
      const caption = document.createElement("span");
      caption.setAttribute("class", "TempElement");
      const idOfLabel = element.getAttribute("aria-labelledby");
      const label = document.getElementById(idOfLabel).innerText;
      // If there's alt text for this image,
      // add it immediately after the image
      if (!!label) {
        caption.innerText = `${label}, ${getLabelSuffix(element)}`;
        element.insertAdjacentElement("afterend", caption);
      }
    });

    // iframe
    const iframes = document.querySelectorAll("iframe:not([role='img'])");
    iframes.forEach((element) => {
      const caption = document.createElement("span");
      caption.setAttribute("class", "TempElement");
      caption.innerText = `frame 1`;
      element.insertAdjacentElement("afterend", caption);
    });
  });
}

export default useShowAltTextAfterMedia;
