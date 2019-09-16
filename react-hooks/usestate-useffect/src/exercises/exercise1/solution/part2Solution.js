/* eslint-disable no-unused-expressions, import/first */

import React, { useState } from 'react';
import {
  processForm,
  validateField
} from '../utilities';

export function Field({
  label,
  name,
  ...inputProps
}) {
  // 📗 Solution below 📗
  const [isValid, setIsValid] = useState(true);
  // Handle the onBlur event, run the validator, and set state
  const handleInputBlur = (event) => {
    const newIsValid = validateField(
      event.target.value,
      name
    );
    setIsValid(newIsValid);
  };
  // 📗 Solution above 📗
  return (
    <div className="Form-fieldWrapper">
      <label
        className="Form-fieldLabel"
        htmlFor={name}
      >
        {label}
        {!isValid && <i> Field is invalid!</i>}
      </label>
      <input
        className="Form-fieldInput"
        id={name}
        onBlur={handleInputBlur} // 📗 Event handler 📗
        name={name}
        {...inputProps}
      />
    </div>
  );
}

// Exercise setup below
function Form() {
  const [fullName, updateFullName] = useState();
  const [
    phoneNumber,
    updatePhoneNumber
  ] = useState();
  const [
    emailAddress,
    updateEmailAddress
  ] = useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    processForm({
      fullName,
      phoneNumber,
      emailAddress
    });
  };
  return (
    <section>
      <h3>Exercise 1, Part 2</h3>
      <form
        className="Form"
        onSubmit={handleFormSubmit}
      >
        <Field
          label="Full Name"
          onChange={(e) =>
            updateFullName(e.target.value)
          }
          name="fullName"
          value={fullName}
        />
        <Field
          label="Phone Number"
          onChange={(e) =>
            updatePhoneNumber(e.target.value)
          }
          name="phoneNumber"
          value={phoneNumber}
        />
        <Field
          label="Email Address"
          onChange={(e) =>
            updateEmailAddress(e.target.value)
          }
          name="emailAddress"
          value={emailAddress}
        />
        <hr className="Divider" />
        <button className="Form-submitButton">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
