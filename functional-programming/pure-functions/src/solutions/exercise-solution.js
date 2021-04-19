import { isValidHexCode } from "../utils";

export const hexToRgb = (hexCode) => {
  if (typeof hexCode !== "string") {
    throw new Error("Argument must be a string");
  }

  if (!isValidHexCode(hexCode)) {
    throw new Error("Argument must be a valid hex");
  }

  const red = parseInt(hexCode.slice(1, 3), 16);
  const green = parseInt(hexCode.slice(3, 5), 16);
  const blue = parseInt(hexCode.slice(5, 7), 16);

  return {
    red,
    green,
    blue,
  };
};

export const rgbToHex = (rgbObject) => {
  if (
    !rgbObject.hasOwnProperty("red") ||
    !rgbObject.hasOwnProperty("green") ||
    !rgbObject.hasOwnProperty("blue")
  ) {
    throw new Error("Object must have a red green and blue property");
  }

  const { red, green, blue } = rgbObject;

  if (
    !isValidInputNumber(red) ||
    !isValidInputNumber(green) ||
    !isValidInputNumber(blue)
  ) {
    throw new Error("object properties must be numbers between 0 and 255");
  }

  return `#${getPaddedHex(red)}${getPaddedHex(green)}${getPaddedHex(blue)}`;
};

const isValidInputNumber = (number) =>
  typeof number === "number" && number >= 0 && number <= 255;

const getPaddedHex = (number) => number.toString(16).padStart(2, "0");
