// @ts-check

const acceptedLanguages = ["es", "en"];

const matches = navigator.language.match(/^([a-z]{2})(?:-[a-zA-Z]{2})?(?:-[0-9]{3})?$/);
const language = matches ? matches[1] : "en";

location.href = acceptedLanguages.includes(language) ? `./${language}/` : "./en/";