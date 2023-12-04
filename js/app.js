
const passwordElement = document.querySelector('#generator__password-value')
const rangeElement = document.querySelector('#range')
const lengthRangeElement = document.querySelector('#generator__length-value') 
const generatorPasswordElement = document.querySelector('#generator__btn')

const optionsElements = document.querySelector('.generator__filters')

const passwordCharacters = {
    lowerCase : 'abcdefghijklmnñopqrstuvwxyz',
    upperCase : 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
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

optionsElements.addEventListener('click', e => {
   
    if(e.target.type !== 'checkbox') {
        return
    }
    selectedPasswordOption(e.target)
})

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

selectedPasswordOption = (element) => {
    /* Contiene el tipo de caracteres a usar, segun lo que indique el usuario */
    charactersOptions = ''

    /* Tenemos acceso a todos los input checkbox que han sido seleccionados */
    const allOptions = optionsElements.querySelectorAll('input[type="checkbox"]:checked')

    allOptions.forEach( checkbox => {
        charactersOptions  += passwordCharacters[checkbox.id]
    })
    setDisabledButton()
    return charactersOptions
}

const setDisabledButton = () => {
    /* !charactersOptions.length si no contiene caracteres singifica que esta vacio y que no se ha seleccionado ningun checkbox. Asi establecemos false o true para el atributo disables del boton que genera contraseñas */
    generatorPasswordElement.disabled = !charactersOptions.length
    if(generatorPasswordElement.disabled === true) {
        passwordElement.value = '' 
    }
}