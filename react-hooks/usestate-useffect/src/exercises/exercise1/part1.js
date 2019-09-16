/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 1, Part 1 - Making Inputs Stateful 📚
 
  We've got a form with 3 fields: a person's full name, 
  their phone number, and an email address. However, the inputs
  don't work; when we try to submit the form, it tells us that
  the fields are empty. If we manage the state of the values
  with hooks, we can fix this!
 
  🛠️ Make all of the inputs stateful using the useState hook
  🛠️ When an input changes (onChange event), it should save the value to state
  🛠️ The value of an input should always come from state

  💡 processForm takes an object of our 3 fields. If any of these
  💡 fields are missing, it shows an alert to indicate this.
  💡 If all fields have values when processForm is ran, 
  💡 processForm will show an alert with the contents of the fields

  💡 We provide a "Field" component which reduces some complexity
  💡 in how much code is necessary. Take a look to see how it functions,
  💡 and what you will need to do to make its value stateful.
  💡 You do __not__ need to modify this component for this exercise.
`;

import React, { useState } from 'react';
import { processForm } from './utilities';

function Form() {
  let fullName, phoneNumber, emailAddress;
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
        Exercise 1, Part 1: Saving form data to
        state
      </h3>
      <form
        className="Form"
        onSubmit={handleFormSubmit}
      >
        <Field
          label="Full Name"
          name="fullName"
          type="text"
          value={fullName}
        />
        <Field
          label="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
        />
        <Field
          label="Email Address"
          name="email"
          value={emailAddress}
        />
        <hr className="Divider" />
        <button
          className="Form-submitButton"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

// This component is provided as a helper
// You should __not__ need to modify it to solve this exercise
function Field({
  label,
  name,
  type,
  value,
  ...inputProps
}) {
  return (
    <div className="Form-fieldWrapper">
      <label
        className="Form-fieldLabel"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="Form-fieldInput"
        id={name}
        name={name}
        type="text"
        value={value}
        {...inputProps}
      />
    </div>
  );
}

` 
✅✅✅ 

  When you're done with Part 1, open 'part2.js' to
  begin the next part of this exercise, and click
  the 'Advance to Part 2' button in the browser!
  
✅✅✅
`;

// Exercise setup, ignore everything below this line
export default Form;
