declare const window: any

export interface wordComponent {
    'es': string
    'en': string
    'data': string
    'type': 'placeholder' | 'inner'
}

const defaultDictionary: Record<string, string> = Object.freeze({
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
})

window["currentDictionary"] = Object.assign({}, defaultDictionary)

export const getDictionary = ()=> {
    return window["currentDictionary"] as Record<string, string>
}
