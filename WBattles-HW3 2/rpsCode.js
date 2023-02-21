// Wiley Batttles, CIS-3023-01, 2/12/23, HW3

let $ = function (id) {
    return document.getElementById(id);
}

compScore = 0
playScore = 0
let rosham = function (button) {

    // get robot throw, change image to fit
    var comp = Math.floor(Math.random() * (4 - 1) + 1)
    var compThrow = ""
    switch (comp) {
        case comp = 1:
            compThrow = "rock"
            $('throwImg').src = "https://i.pinimg.com/originals/9d/bb/14/9dbb14a92a7611794f3e5a0c80e4bad6.png"
            break;
        case comp = 2:
            compThrow = "paper"
            $('throwImg').src = "https://i.etsystatic.com/11123418/r/il/847099/3402282434/il_fullxfull.3402282434_jy9j.jpg"
            break;
        case comp = 3:
            compThrow = "scissors"
            $('throwImg').src = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/33656/scissors-stationery-clipart-xl.png"
            break;
    }

    // compare player vs robot, display result
    if (button === compThrow) {
        $("last-play").innerHTML = "Its a tie"
    } else {
        // player throws rock
        if ((button == "rock") && (compThrow == "paper")) {
            $("last-play").innerHTML =  "You lose! Paper beats rock"
            compScore++
        } else if ((button == "rock") && (compThrow == "scissors")) {
            $("last-play").innerHTML = "You win! Rock beats scissors."
            playScore++

        // player throws paper
        } else if ((button == "paper") && (compThrow == "scissors")) {
            $("last-play").innerHTML = "You lose! Scissors beats paper"
            compScore++
        } else if ((button == "paper") && (compThrow == "rock")) {
            $("last-play").innerHTML = "You win! Paper beats rock"
            playScore++

        // player throws scissors
        } else if ((button == "scissors") && (compThrow == "rock")) {
            $("last-play").innerHTML = "You lose! Rock beats scissors"
            compScore++
        } else if ((button == "scissors") && (compThrow == "paper")) {
            $("last-play").innerHTML = "You win! Scissors beats paper"
            playScore++
        }
    }
    // display score
    $("player-score").innerHTML = "Player: " + playScore
    $("robot-score").innerHTML = "Nebulon: " + compScore

    // victory screen
    if ((playScore == 10) || (compScore == 10)) {
        // remove buttons
        $("throw").innerHTML = ""

        if (playScore == 10) {
            $("last-play").innerHTML = "Player wins, play again?"
        } else {
            $("last-play").innerHTML = "Robot wins, play again?"
        }
    }
    
}

// reset the game
let playAgain = function () {
    // clear image
    $('throwImg').src = "http://www.clker.com/cliparts/O/7/l/y/U/E/gray-handprint-hi.png"
    // add buttons
    $("throw").innerHTML =
        "<button onclick=\"rosham('rock')\">Rock</button> <button onclick=\"rosham('paper')\">Paper</button> <button onclick=\"rosham('scissors')\">Scissors</button>"
    playScore = 0
    compScore = 0
    $("last-play").innerHTML = "Start"
    $("player-score").innerHTML = "Player: 0"
    $("robot-score").innerHTML = "Nebulon: 0"
}