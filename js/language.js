var userLang = navigator.language || navigator.userLanguage;

if (userLang = "es") {
    alert ("Página en " + userLang);
    location.href="/es/";
} else {
    alert ("Page in " + userLang);
    location.href="/";
}