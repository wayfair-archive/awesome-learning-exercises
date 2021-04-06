/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable */
`
📚 Exercise 3: Videos and GIFs 📚

Welcome to Exercise 3: Videos!
This exercise is more open-ended than
the last ones, to model the nature
of videos and GIFs.

Videos and GIFs (we don't perscribe a
specific pronunciation) are some of the
most interesting kinds of multimedia to
provide alternative text for. It's not
as straightforward to provide a single
sentence as alt text for a long video
or GIF. How can you provide meaningful
alternatives to people who cannot
see or hear (in the case of videos)
the content?

* Videos: 
** Captions (either pre-supplied or real time)

* GIFs: 
** Alt text for short GIFs
   (less than 5 seconds)
** Text equivalent for long GIFs
   (more than 5 seconds)

* Videos and GIFs:
** Subtitles (provided in code or baked in)
** Transcriptions

In this exercise, we have a few videos and GIFs
with varying modes of presentation.
Ask yourself: "If I could not see/hear this media,
how would I be able to tell what's in it?"

🛠️ Your goal in this exercise is to present the 
🛠️ content of these different kinds of media in
🛠️ an accessible way. This is meant to be 
🛠️ more open-ended

💡 How will someone who can't see a GIF 
💡 know what's in it? How can someone with
💡 hearing problems know who is 
💡 saying what in a video? Or how can they know
💡 what's going on in a video?
💡 Use your A11y knowledge, and CodeSandbox hints,
💡 to address accessibility issues!

⭐ Extra Credit: How can we accessibly add a captions
⭐ menu to let watchers change the language
⭐ they see captions in? Implement a solution
⭐ that changes the caption track used in the video!

💡 Exercise adapted from MDN (⭐ helpful for Extra Credit ⭐)
💡 https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video

`;

const Exercise3 = () => (
  <main id="maincontent">
    <h1>All about dragons</h1>
    <h2>Sintel</h2>
    <video controls={false}>
      <source
        src="https://github.com/iandevlin/iandevlin.github.io/blob/master/mdn/video-player-with-captions/video/sintel-short.mp4?raw=true"
        type="video/mp4"
      />
    </video>
    <h2>Spyro</h2>
    <img src="https://media3.giphy.com/media/RL4MF0v7RNX7NO3SrR/giphy.gif" />
    <h2>Elizabeth (Shrek)</h2>
    <iframe
      src="https://gifer.com/embed/S8J7"
      width="480"
      height="274.286"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </main>
);

` 
✅✅✅ 

  You've finished the Accessibility Course on Multimedia!
  May your journeys with Accessibility be fruitful and may
  your alt text be bontiful!
  
✅✅✅
`;

import React from "react";

export default Exercise3;
