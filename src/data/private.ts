/**
 * PRIVATE content. Only used by /api/verify on the server and sent to the
 * browser AFTER the correct date of birth is entered.
 *
 * Date of birth format: YYYY-MM-DD.
 * On Vercel you can set BIRTHDAY_DOB as an environment variable instead,
 * so the date never lives in your code or GitHub repo.
 */
export const dob = "2003-10-06";

export const letter = {
  greeting: "Dear Jeel,",
  paragraphs: [
  "We've shared so many unforgettable moments, and honestly, I'm really lucky to have a friend like you. 💙",

  "I hope this year brings you lots of happiness, success, and endless reasons to smile. Stay amazing, always! ✨",
],
  signoff: "Always yours,",
  signature: "Shivraj and Parth",
};

export const finale = {
  title: "Happy Birthday!",
  message: "I hope this year gives you countless reasons to smile.",
  replay: "Celebrate again",
};
