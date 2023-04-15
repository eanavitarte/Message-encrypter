
const themes = ["light", "dark"] as const
type Theme = typeof themes[number]

const themeBtn = document.querySelector('input#DLChecking') as HTMLInputElement
const body = document.querySelector('body') as HTMLBodyElement

function reloadTheme(themeSelect: Theme){
	if(themeSelect === "dark") body.setAttribute('data-theme', "dark")
	else body.setAttribute('data-theme', "light")
}

function changeTheme(value: boolean) {
	const themeSelect = value ? "dark" : "light"
	localStorage.setItem("theme", themeSelect)
	reloadTheme(themeSelect)
}

(function (){
	const currentTheme = (localStorage.getItem('theme') ?? document.documentElement.dataset.theme ?? "light") as Theme
	themeBtn.checked = currentTheme === "dark"
	if (
		themeBtn.checked &&
		themes.includes(currentTheme)
	) {
		reloadTheme(currentTheme)
	}
})()

themeBtn.addEventListener('change', () => changeTheme(themeBtn.checked))