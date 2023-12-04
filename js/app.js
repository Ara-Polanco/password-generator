
const passwordElement = document.querySelector('#generator__password-value')
const rangeElement = document.querySelector('#range')
const lengthRangeElement = document.querySelector('#generator__length-value') 
const generatorPasswordElement = document.querySelector('#generator__btn')

const optionsElements = document.querySelector('.generator__filters')

const allowedCharacters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890+-.*,!\"·$%&/()=?{}[]'"

/* const passwordCharacters = {
    uppercase : 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    lowercase : 'abcdefghijklmnñopqrstuvwxyz',
    numbers : '1234567890',
    symbols : "+-.*,!\"·$%&/()=?{}[]'",
} */

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
        const randomNumber = Math.floor(Math.random() * allowedCharacters.length)
        const randomCharacter = allowedCharacters.charAt(randomNumber)

        /* Contraseña generada */
        password += randomCharacter
    }
    printPassword(password)
}
generatorPasswordElement.addEventListener('click', generatePassword)




