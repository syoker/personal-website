var userLang = navigator.language || navigator.userLanguage;

alert (userLang);

switch (userLang) {
    case 'es':
        location.href="./es/";
        break;
    default:
        location.href="./en/";
}