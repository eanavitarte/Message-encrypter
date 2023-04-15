import { words } from './language.js';
const langs = ["es", "en"];
const changeLangBtn = document.querySelector('input#tslChecking');
function insertLangText(content, language) {
    const { type, data, en, es } = content;
    if (type === 'placeholder') {
        const element = document.querySelector(`[data-lang="${data}"]`);
        element.placeholder = language === "es" ? es : en;
    }
    else if (type === 'inner') {
        const element = document.querySelector(`[data-lang="${data}"]`);
        element.innerText = language === "es" ? es : en;
    }
}
function reloadLang(language) {
    Object.keys(words).forEach(key => {
        insertLangText(words[key], language);
    });
}
function changeLang(value) {
    const langChange = value ? "en" : "es";
    localStorage.setItem('lang', langChange);
    document.documentElement.lang = langChange;
    reloadLang(langChange);
}
(function () {
    const currentLang = (localStorage.getItem("lang") ?? document.documentElement.lang);
    changeLangBtn.checked = currentLang === "en";
    if (changeLangBtn.checked &&
        langs.includes(currentLang)) {
        reloadLang(currentLang);
    }
})();
changeLangBtn.addEventListener('change', () => changeLang(changeLangBtn.checked));
