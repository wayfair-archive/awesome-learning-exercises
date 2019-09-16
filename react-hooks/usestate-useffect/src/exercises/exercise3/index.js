/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 3 - Meme Generator and Gallery 📚

🚨 This exercise is very open-ended, and will take
🚨 more time to complete than the other two exercises.
🚨 You may wish to set aside more time to do this
🚨 exercise, or allow people to do it on their own.
🚨 It also asks group members to make architecture
🚨 decisions, and is reflective of real situations
🚨 where engineers need to make these decisions on
🚨 their own.
 
  Welcome to Exercise 3! In this exercise,
  you will have free rein to develop an 
  interface that allows a visitor to browse
  templates of popular memes, and potentially
  let them create their own!
  
  We have an API that we can fetch from in order to
  browse meme templates, and create a new meme from
  a template based on a GET request.

  https://memegen.link/api/

  You can view the link in your browser, but running
  a GET request on an API resource returns it in the
  form of a JSON. Pretty cool, right?

  The API will return the name of the template,
  aliases of it, a link to its description,
  and an "example" property to get an example image.
  Using the "example" property, you can also figure
  out how to make your own meme!

  🛠️ Create a tool that allows users to browse meme
  🛠️ templates and see details about the meme template.
  🛠️ The user should see the name of the template,
  🛠️ aliases of it, and a link to its description.

  ⭐ Bonus: Embed the example image in the browser
  ⭐ Bonus: Allow visitors to customize the text and
  ⭐ make their own meme!

  💡 We've already imported useEffect and useState for you.
  💡 We also provide two functions for fetching data:
  💡 getMemeTemplates (takes no arguments)
  💡 getMemeInformation (takes in the link of a template)
  💡  The link you need is returned from getMemeTemplates

  💡 Feel free to reuse components from other exercises
  💡 for this exercise! You can also break up parts
  💡 of this exercise into other files and components.
  💡 Look in the "components" folder in this directory
  💡 to see two components that will reduce the amount
  💡 of data processing and manipulation you need to do
  💡 from the API results.

  🚨 Experiment with the API before you start coding!
`;

import React, {
  useEffect,
  useState
} from 'react';

const Exercise3 = () => {
  return (
    <section>
      <p>
        {/* Remove this code when ready to start */}
        Check out{' '}
        <code className="inlineCode">
          exercises/exercise3/index.js
        </code>{' '}
        to start Exercise 3!
      </p>
    </section>
  );
};

export default Exercise3;
