
function ageInDays() {

    let BirthYear = prompt('enter your birth year')
    let ageindays =  (2020 - BirthYear) * 365

    let h1 = document.createElement('h1')
    let textAnswer = document.createTextNode('you are ' + ageindays + ' days old')

    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)

}

function reset() {
    document.getElementById('ageInDays').remove()
}