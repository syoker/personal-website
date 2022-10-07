var userLang = navigator.language || navigator.userLanguage;

switch (userLang) {
    case 'es':
    case 'es-419':
    case 'es-AR':
    case 'es-BR':
    case 'es-BZ':
    case 'es-CL':
    case 'es-CO':
    case 'es-CR':
    case 'es-CU':
    case 'es-DO':
    case 'es-EA':
    case 'es-EC':
    case 'es-ES':
    case 'es-GQ':
    case 'es-GT':
    case 'es-HN':
    case 'es-IC':
    case 'es-MX':
    case 'es-NI':
    case 'es-NI':
    case 'es-PA':
    case 'es-PE':
    case 'es-PH':
    case 'es-PR':
    case 'es-PY':
    case 'es-SV':
    case 'es-US':
    case 'es-UY':
    case 'es-VE':
        location.href = "./es/";
        break;
    default:
        location.href = "./en/";
}