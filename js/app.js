
const passwordElement = document.querySelector('#generator__password-value')
const rangeElement = document.querySelector('#range')
const lengthRangeElement = document.querySelector('#generator__length-value') 
const generatorPasswordElement = document.querySelector('#generator__btn')

const upperCaseElement = document.getElementById('upperCaseOption')
const lowerCaseElement = document.getElementById('lowerCaseOption')
const numbersElement = document.getElementById('numbersOption')
const symbolsElement = document.getElementById('symbolsOption')

const optionsElements = document.querySelector('.generator__filters')

/* const allowedCharacters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890+-.*,!\"·$%&/()=?{}[]'"
 */
const passwordCharacters = {
    uppercase : 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    lowercase : 'abcdefghijklmnñopqrstuvwxyz',
    numbers : '1234567890',
    symbols : "+-.*,¡!\"·$%&/()=¿?{}[]'|°\\"
}

let charactersOptions 
let lengthPassword = 16


const showPasswordLength = (e) => {
    lengthPassword = e.target.value
    lengthRangeElement.textContent = `Length: ${lengthPassword}`
}
rangeElement.addEventListener('change', showPasswordLength)

const printPassword = (password) => {
    passwordElement.value = password
}

const generatePassword = (e) => {
    e.preventDefault()
    let password = ''

    for(let i = 0; i<lengthPassword; i++) {
        const randomNumber = Math.floor(Math.random() * charactersOptions.length)
        const randomCharacter = charactersOptions.charAt(randomNumber)

        /* Contraseña generada */
        password += randomCharacter
    }
    printPassword(password)
}
generatorPasswordElement.addEventListener('click', generatePassword)

selectedPasswordOption = () => {
    /* Contiene el tipo de caracteres a usar, segun lo que indique el usuario */
    charactersOptions = ''

    if(upperCaseElement.checked) {
        charactersOptions += passwordCharacters.uppercase
    }
    if(lowerCaseElement.checked) {
        charactersOptions += passwordCharacters.lowercase
    }
    if(numbersElement.checked) {
        charactersOptions += passwordCharacters.numbers
    }
    if(symbolsElement.checked) {
        charactersOptions += passwordCharacters.symbols
    }

    setDisabledButton()
    return charactersOptions
}

upperCaseElement.addEventListener('change', selectedPasswordOption)
lowerCaseElement.addEventListener('change', selectedPasswordOption)
numbersElement.addEventListener('change', selectedPasswordOption)
symbolsElement.addEventListener('change', selectedPasswordOption)

const setDisabledButton = () => {
    /* !charactersOptions.length si no contiene caracteres singifica que esta vacio y que no se ha seleccionado ningun checkbox. Asi establecemos false o true para el atributo disables del boton que genera contraseñas */
    generatorPasswordElement.disabled = !charactersOptions.length
}
