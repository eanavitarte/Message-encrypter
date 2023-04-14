declare const window: any

export interface wordComponent {
    'es': string
    'en': string
    'data': string
    'type': 'placeholder' | 'inner'
}

export enum theme {
    light = 'l',
    dark = 'd'
}

const defaultDictionary: Record<string, string> = Object.freeze({
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
})

const defaultTheme = theme.light

window["currentDictionary"] = Object.assign({}, defaultDictionary)
window["theme"] = localStorage.getItem('theme') ?? defaultTheme as theme

export const getTheme = () => {
    return window["theme"] as theme
}

export const getDictionary = ()=> {
    return window["currentDictionary"] as Record<string, string>
}
