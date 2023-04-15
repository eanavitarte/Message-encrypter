const defaultDictionary = Object.freeze({
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
});
window["currentDictionary"] = Object.assign({}, defaultDictionary);
export const getDictionary = () => {
    return window["currentDictionary"];
};
