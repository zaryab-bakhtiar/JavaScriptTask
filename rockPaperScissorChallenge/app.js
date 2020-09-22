
function rpsGame(yourChoice) {
    // console.log(yourChoice)

    let humanChoice, botChoice;
    humanChoice = yourChoice.id

    botChoice = numberToChoice(randToRpsInt())
    console.log('computer choice', botChoice)

    results = decideWinner(humanChoice, botChoice)
    console.log(results)

    message = finalMessage(results)
    console.log(message)

    rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randToRpsInt() {
    return (
        Math.floor(Math.random() * 3)
    )
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number]
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDataBase = {
        'rock': { 'scissor': 1, 'rock':0.5, 'paper':0 },
        'paper': { 'rock': 1, 'paper':0.5, 'scissor':0 },
        'scissor': { 'paper': 1, 'scissor':0.5, 'rock':0 }
    }

    let yourScore = rpsDataBase[yourChoice][computerChoice]
    let computerScore = rpsDataBase[computerChoice][yourChoice]

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {

        return {'message': 'you Lost', 'color': 'red'}

    } else if (yourScore === 0.5) {

        return {'message': 'you tied!', 'color': 'yellow'}

    } else {

        return {'message': 'you Won', 'color': 'green'}

    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    // remove all images
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissor').remove()

    let humanDiv = document.createElement('div')
    let botDiv = document.createElement('div')
    let messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src=' " + imagesDataBase[humanImageChoice] + " ' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 17)'> "
    messageDiv.innerHTML = " <h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px '> " + finalMessage['message'] + "</h1>"                       
    botDiv.innerHTML = "<img src=' " + imagesDataBase[botImageChoice] + " ' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 17)'> "

    document.getElementById('flex-box-rps').appendChild(humanDiv)
    document.getElementById('flex-box-rps').appendChild(messageDiv)
    document.getElementById('flex-box-rps').appendChild(botDiv)
}