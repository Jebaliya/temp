/**
 * PUBLIC content + theme. Everything here ships to the browser.
 * The private letter, final message and date of birth live in ./private.ts
 * (server only) so they are not in the page's JavaScript.
 */

export const site = {
  name: "Jeel", // <-- her name
  pageTitle: "For you",
  madeBy: "Made by Jayveer and Parth",
};

export const gate = {
  title: "Before we begin...",
  text: "I need to make sure this little surprise is for the right person.",
  label: "Your birthday (day and month)",
  button: "Continue",
  error: "That's not the day I have. Check it and try again.",
};

export const welcome = {
  title: "Hey, birthday girl!",
  text: "Today is a little more special because it's your day.",
  button: "Open Your Surprise →",
};

export const memories = {
  title: "A few of our favourites",
  text: "Moments We'd happily live through again.",
  // Replace the files in /public/images with your own, keeping these names
  // (or change the names here). `position` controls which part of the photo
  // stays in frame when cropped: "center 25%" keeps faces higher up.
  photos: [ { src: "/images/photo1.jpg", alt: "Photo 1", caption: "Today isn't just another day…\nToday is the day someone very special was born. 💫💙", position: "center 30%", ratio: "4 / 5" }, { src: "/images/photo2.jpg", alt: "Photo 2", caption: "Some people make ordinary moments feel a little more special just by being there. ✨💙", position: "center 30%", ratio: "1 / 1" }, { src: "/images/photo3.jpg", alt: "Photo 3", caption: "Your kindness, your smile, and the way you make everyone around you feel comfortable are just a few of the many things that make you truly special. 💙✨", position: "center 30%", ratio: "5 / 6" }, { src: "/images/photo4.jpg", alt: "Photo 4", caption: "No matter where life takes us, I hope you always remember how special you are. ♾️💫🧿", position: "center 30%", ratio: "4 / 5" }, { src: "/images/photo5.jpg", alt: "Photo 5", caption: "I hope you always keep that beautiful smile, because it makes even the simplest moments brighter. 💫🧿", position: "center 30%", ratio: "4 / 5" }, ],
};

export const letterHeading = "A note for you";

/** Colors as hex. Change these and the whole site follows. */
export const theme = {
  night: "#1A1423", // page background (deep aubergine)
  ink: "#F4EEF6", // main text on dark
  mist: "#A89DB5", // secondary text on dark
  gold: "#D8B67C", // champagne accent
  rose: "#C98A9C", // soft rose accent
  paper: "#F2E9DA", // letter paper
  paperink: "#2B2230", // text on the letter
};
