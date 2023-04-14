export var theme;
(function (theme) {
    theme["light"] = "l";
    theme["dark"] = "d";
})(theme || (theme = {}));
const defaultDictionary = Object.freeze({
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
});
const defaultTheme = theme.light;
window["currentDictionary"] = Object.assign({}, defaultDictionary);
window["theme"] = localStorage.getItem('theme') ?? defaultTheme;
export const getTheme = () => {
    return window["theme"];
};
export const getDictionary = () => {
    return window["currentDictionary"];
};
