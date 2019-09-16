export function processForm({
  fullName,
  phoneNumber,
  emailAddress
}) {
  if (fullName && phoneNumber && emailAddress) {
    alert(`
      Thank you for submitting your info, ${fullName}!
      Your phone number is ${phoneNumber},
      and your email address is ${emailAddress}.
    `);
  } else {
    alert('Please enter all fields in the form!');
  }
}

const tlds = ['.com', '.org', '.net'];
export function validateField(data, name) {
  switch (name) {
    case 'fullName': {
      return /^[a-zA-Z\s]*$/.test(data);
    }
    case 'phoneNumber': {
      return (
        !isNaN(data) && `${data}`.length === 10
      );
    }
    case 'emailAddress': {
      return (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
          data
        ) &&
        tlds.some((tld) => data.includes(tld))
      );
    }
    default:
      return true;
  }
}
