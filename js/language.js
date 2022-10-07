var userLang = navigator.language || navigator.userLanguage;

switch (userLang) {
    case 'es':
        location.href="./es/";
        break;
    default:
        location.href="./en/";
}