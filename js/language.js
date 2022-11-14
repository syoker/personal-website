const acceptedLanguages = ["es"];

const matches = navigator.language.match(/^([a-z]{2})(?:-[a-zA-Z]{2})?(?:-[0-9]{3})?$/);
const language = matches ? matches[1] : "en";

if (currentLanguage != language)
    location.href = acceptedLanguages.includes(language) ? `/${language}${currentPage}/` : `${currentPage}/`;