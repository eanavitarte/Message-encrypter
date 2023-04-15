"use strict";
const themes = ["light", "dark"];
const themeBtn = document.querySelector('input#DLChecking');
const body = document.querySelector('body');
function reloadTheme(themeSelect) {
    if (themeSelect === "dark")
        body.setAttribute('data-theme', "dark");
    else
        body.setAttribute('data-theme', "light");
}
function changeTheme(value) {
    const themeSelect = value ? "dark" : "light";
    localStorage.setItem("theme", themeSelect);
    reloadTheme(themeSelect);
}
(function () {
    const currentTheme = (localStorage.getItem('theme') ?? document.documentElement.dataset.theme ?? "light");
    themeBtn.checked = currentTheme === "dark";
    if (themeBtn.checked &&
        themes.includes(currentTheme)) {
        reloadTheme(currentTheme);
    }
})();
themeBtn.addEventListener('change', () => changeTheme(themeBtn.checked));
