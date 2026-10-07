/*
 * Site configuration.
 *
 * STORY_ENDPOINT: leave empty ("") for demo mode — new stories are saved in the
 * visitor's browser (localStorage) only. To collect stories for real, paste a
 * form endpoint URL here (e.g. a Formspree form URL like
 * "https://formspree.io/f/xxxxxxx" or a Google Apps Script web-app URL).
 * See README.md → "Connecting the Share-Your-Story form to a backend".
 *
 * STORIES_FEED_URL: optional URL that returns approved stories as JSON
 * (array of objects shaped like the ones in js/data.js). When set, those
 * stories are shown on the wall instead of the sample cards.
 */
window.SITE_CONFIG = {
  STORY_ENDPOINT: "",
  STORIES_FEED_URL: "",
  SHOW_SAMPLE_TESTIMONIALS: true, // set to false once you have real stories
  PHONE_E164: "+18189275356",
  PHONE_DISPLAY: "(818) 927-5356",
  EMAIL: "rosalesnari69@gmail.com"
};
