import { wordComponent } from './constants.js';
import { words } from './language.js';

const langs = ["es", "en"] as const
type Lang = typeof langs[number]

const changeLangBtn = document.querySelector('input#tslChecking') as HTMLInputElement

function insertLangText(content: wordComponent, language: Lang){
    const {type, data, en, es} = content
    if(type === 'placeholder'){
        const element = document.querySelector(`[data-lang="${data}"]`) as HTMLTextAreaElement;
        element.placeholder = language === "es" ? es : en
    }
    else if(type === 'inner'){
        const element = document.querySelector(`[data-lang="${data}"]`) as HTMLElement;
        element.innerText = language === "es" ? es : en
    }
}

function reloadLang(language: Lang){
    Object.keys(words).forEach(key => {
        insertLangText(words[key], language)
    })
}

function changeLang(value: boolean){
    const langChange = value ? "en" : "es"
    localStorage.setItem('lang', langChange)
    reloadLang(langChange)
}

(function (){
	const currentLang = document.documentElement.lang as Lang
	changeLangBtn.checked = currentLang === "en"
	if (
        changeLangBtn.checked &&
		langs.includes(currentLang)
	) {
		reloadLang(currentLang)
	}
})()

changeLangBtn.addEventListener('change', () => changeLang(changeLangBtn.checked))