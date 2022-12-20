const acceptedLanguages = ["es"];

const matches = navigator.language.match(/^([a-z]{2})(?:-[a-zA-Z]{2})?(?:-[0-9]{3})?$/);
const language = matches ? matches[1] : "en";

const verify = acceptedLanguages.includes(language) ? language : "en";

if (currentLanguage != verify)
    location.href = acceptedLanguages.includes(verify) ? `/${verify}${currentPage}/` : `${currentPage}/`;