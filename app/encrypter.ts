
// Class for storing common data
// #OOP #goodPractices
class Encrypter {

	// Set up a key:value association
	// for keeping coherence on encryption/decryption
	dict = {
		"e": "enter",
		"i": "imes",
		"a": "ai",
		"o": "ober",
		"u": "ufat"
	}

	// On creation set a reverse dict
	// for decryption
	constructor() {
		(this as any).rev = Object.fromEntries(Object.entries(this.dict).map(el => el.reverse()))
	}

	// match and replace encrypt
	encrypt(text: string) {
		const encryptedText = text.replace(/[aeiou]/g, match => this.dict[match])
		return encryptedText
	}

	// match and replace decrypt
	decrypt(text: string) {
		const decryptedText = text.replace(/enter|imes|ai|ober|ufat/g, match => (this as any).rev[match])
		return decryptedText
	}
}

// Set encrypt button
const buttonEncrypt = <HTMLElement>document.getElementById("name")

//Set decrypt button
const buttonDecrypt = <HTMLElement>document.getElementById("name")

// Set copy button
const buttonCopy = <HTMLElement>document.getElementById("name")

// Set text area
const textAreaLeft = <HTMLInputElement>document.getElementById("name")

// Set text area
const textAreaRight = <HTMLInputElement>document.getElementById("name")

// Set encrypter
const encrypter = new Encrypter()

// Handle encrypt
buttonEncrypt.addEventListener("click", ()=>{
	textAreaRight.value = encrypter.encrypt(textAreaLeft.value)
}, {passive: true})

// Handle decrypt
buttonDecrypt.addEventListener("click", ()=>{
	textAreaRight.value = encrypter.decrypt(textAreaLeft.value)
}, {passive: true})

// Handle copier
buttonCopy.addEventListener("click", ()=>{
	textAreaRight.select()
	document.execCommand("copy")
}, {passive: true})
