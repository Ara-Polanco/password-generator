
const passwordElement = document.querySelector('#generator__password-value')
const rangeElement = document.querySelector('#range')
const lengthRangeElement = document.querySelector('#generator__length-value') 
const generatorPasswordElement = document.querySelector('#generator__btn')

const passwordCharacters = {
    uppercase : 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    lowercase : 'abcdefghijklmnñopqrstuvwxyz',
    numbers : '1234567890',
    symbols : "+-.*,!\"·$%&/()=?{}[]'",
}


/* console.log(rangeElement.value) */


const showLengthValue = (e) => {
    const value = e.target.value
    lengthRangeElement.textContent = `Length: ${value}`
}

rangeElement.addEventListener('change', showLengthValue)



