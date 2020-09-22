
let all_buttons = document.getElementsByTagName('button')
console.log(all_buttons)

let copyAllButtons = []
for(let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])
}
console.log(copyAllButtons)

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed()

    } else if  (buttonThingy.value === 'green') {
        buttonGreen()

    } else if (buttonThingy.value === 'reset') {

        buttonColorReset()
    } else if (buttonThingy.value === 'random') {
        randomColor()

    }
}

function buttonRed() {
    for (i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonGreen() {
    for (i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonColorReset() {
    for ( let i=0; i < all_buttons.length; i++ ) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButtons[i])
    }
}

function randomColor() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i=0; i< all_buttons.length; i++) {
        let randonNumber = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choices[randonNumber])
    }
}