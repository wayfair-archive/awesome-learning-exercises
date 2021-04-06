/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable */
`
✅ Exercise 3: Videos and GIFs Solution ✅

`;

const Exercise3 = () => (
  <main id="maincontent">
    <h1>All about dragons</h1>
    <h2>Sintel</h2>
    {/* ✅ We want to allow viewers to interact with the controls
        of this video */}
    <video controls>
      <source
        src="https://github.com/iandevlin/iandevlin.github.io/blob/master/mdn/video-player-with-captions/video/sintel-short.mp4?raw=true"
        type="video/mp4"
      />
      {/* ✅ Add the "track" element within the video, and point it to
          the English caption */}
      <track
        label="English"
        kind="subtitles"
        srcLang="en"
        src="captions/sintel-en.vtt"
        default
      ></track>
    </video>
    <h2>Spyro</h2>
    <img
      // ✅ This GIF is short, so it just needs an "alt" tag
      alt="Animation of Spyro the Dragon breathing a sigh"
      src="https://media3.giphy.com/media/RL4MF0v7RNX7NO3SrR/giphy.gif"
    />
    <h2>Elizabeth (Shrek)</h2>
    <iframe
      src="https://gifer.com/embed/S8J7"
      width="480"
      height="274.286"
      frameBorder="0"
      allowFullScreen
      // ✅ This iframe needs a few things for it to function as
      // an image would.
      // role="img" indicates that this is semantically
      // an image, and not an interactive element (that iframes
      // normally are)
      // A user who could _see_ this image would know that it's
      // an animated image, but how would someone
      // who can't see the image know what's going on?
      role="img"
      // ✅ We need to label the iframe to describe its contents
      // Because this image has text permanently added to it
      // (sometimes referred to as "baked in" or "burned in"),
      // we also want to repeat what that text is, so assistive
      // technology can pronounce it and make it as accessible
      // as someone who could see it
      title="Animation of Donkey from Shrek riding Elizabeth the dragon, saying 'All right, nobody move! I've got a dragon here and I'm not afraid to use it!'"
    ></iframe>
  </main>
);

import React from "react";

export default Exercise3;
