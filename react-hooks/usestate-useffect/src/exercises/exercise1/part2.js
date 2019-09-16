/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 1, Part 2 - Field Validation 📚

  Now that our form is stateful, let's validate the contents
  of our fields to make sure we're not getting bad data!
  
  We have provided a validator function that we want to run 
  against every field when a user changes them. Right now, 
  any data can  be submitted in the fields. We want to fix that!

  🛠️ When an input loses focus (onBlur event), run the validator 
  🛠️ function to determine if it's valid Based on the output 
  🛠️ of the validator, set the state of the field to show an error

  💡 validateField takes in two parameters: the data and the name of the field.
  💡 It will return true or false based on the name and data.
  💡 All you need to do is call validateField with its parameters, 
  💡 and set state based on its return value!
`;

import React, { useState } from 'react';
import {
  processForm,
  validateField,
} from './utilities';

function Field({
  label,
  name,
  value,
  ...inputProps
}) {
  // 🛠️ Fix this line!
  const isValid = true;
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
        name={name}
        value={value}
        {...inputProps}
      />
    </div>
  );
}

` 
✅✅✅ 

  Looks like our form is now validating and sending data!
  We're all done with Exercise 1!
  Open up exercise2/part1.js, and click 'Exercise 2' at the
  top of the page whenever you're ready!
  
✅✅✅
`;

// Exercise setup, ignore everything below this line
function Form() {
  const [fullName, updateFullName] = useState();
  const [
    phoneNumber,
    updatePhoneNumber,
  ] = useState();
  const [
    emailAddress,
    updateEmailAddress,
  ] = useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    processForm({
      fullName,
      phoneNumber,
      emailAddress,
    });
  };
  return (
    <section>
      <h3>
        Exercise 1, Part 2: Validating form data
      </h3>
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
