var userLang = navigator.language || navigator.userLanguage;

if (userLang = "es") {
    alert ("Página en español");
    location.href="/es/";
} else {
    alert ("Page in English");
    location.href="/";
}