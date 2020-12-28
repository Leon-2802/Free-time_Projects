//Player 1 und Player 2:
const player1:HTMLElement = document.getElementById("player1");
const player2:HTMLElement = document.getElementById("player2");
const score1:HTMLElement = document.getElementById("score1");
const score2:HTMLElement = document.getElementById("score2");
const nextGameButton:HTMLElement = document.getElementById("nextOne");
//Sounds:
const backgroundBeat:HTMLAudioElement = new Audio("audio/Aerotrancer - Cosmos (Synthwave Rework) (1).mp3");
backgroundBeat.play();
backgroundBeat.volume = 0.02;
const clickSound:HTMLAudioElement = new Audio("audio/win1.wav");
clickSound.volume = 0.2;
const winPlayer1:HTMLAudioElement = new Audio("audio/click.mp3");
winPlayer1.volume = 0.25;
const winPlayer2:HTMLAudioElement = new Audio("audio/win2.wav");
winPlayer2.volume = 0.25;
//Bools:
let symbolSwitchBool: boolean = false;
let whoStarts: boolean = true;
let preventTheOther: boolean = true;
let newGame: boolean = false;
let countAWin: boolean = false;
let countForP1: boolean = false;
let countForP2: boolean = false;
let beatStop: boolean = false;

//Sieg-Counter:
var winCounter1: number = 0;
var winCounter2: number = 0;

//Check-if-already-checked-array:
var checkArray: boolean[] = [];
checkArray[1] = true;
checkArray[2] = true;
checkArray[3] = true;
checkArray[4] = true;
checkArray[5] = true;
checkArray[6] = true;
checkArray[7] = true;
checkArray[8] = true;
checkArray[9] = true;

//Player1 Sieg Array:
var player1Wins: boolean[] = [];
player1Wins[1] = false;
player1Wins[2] = false;
player1Wins[3] = false;
player1Wins[4] = false;
player1Wins[5] = false;
player1Wins[6] = false;
player1Wins[7] = false;
player1Wins[8] = false;
player1Wins[9] = false;

//Player2 Sieg Array:
var player2Wins: boolean[] = [];
player2Wins[1] = false;
player2Wins[2] = false;
player2Wins[3] = false;
player2Wins[4] = false;
player2Wins[5] = false;
player2Wins[6] = false;
player2Wins[7] = false;
player2Wins[8] = false;
player2Wins[9] = false;

document.querySelector('#kachel1').addEventListener("click", function() {
    changeOpacity('#x1', '#o1', 1);
    clickSound.play();
});
document.querySelector('#kachel2').addEventListener("click", function() {
    changeOpacity('#x2', '#o2', 2);
    clickSound.play();
});
document.querySelector('#kachel3').addEventListener("click", function() {
    changeOpacity('#x3', '#o3', 3);
    clickSound.play();
});
document.querySelector('#kachel4').addEventListener("click", function() {
    changeOpacity('#x4', '#o4', 4);
    clickSound.play();
});
document.querySelector('#kachel5').addEventListener("click", function() {
    changeOpacity('#x5', '#o5', 5);
    clickSound.play();
});
document.querySelector('#kachel6').addEventListener("click", function() {
    changeOpacity('#x6', '#o6', 6);
    clickSound.play();
});
document.querySelector('#kachel7').addEventListener("click", function() {
    changeOpacity('#x7', '#o7', 7);
    clickSound.play();
});
document.querySelector('#kachel8').addEventListener("click", function() {
    changeOpacity('#x8', '#o8', 8);
    clickSound.play();
});
document.querySelector('#kachel9').addEventListener("click", function() {
    changeOpacity('#x9', '#o9', 9);
    clickSound.play();
});

//Restart
document.querySelector('#restart').addEventListener("click", function() {
        restartGame();
});
//Next Game
nextGameButton.addEventListener("click", function(): void {
    nextGame();
});

//Sound Off:
document.querySelector("#sound-off").addEventListener("click", function() {
    if(beatStop == false) {
        backgroundBeat.pause();
        document.querySelector("#sound-off").setAttribute("style", "opacity: " + 100 + "%");
        beatStop = true;
    }
    else if(beatStop == true) {
        backgroundBeat.play();
        document.querySelector("#sound-off").setAttribute("style", "opacity: " + 40 + "%");
        beatStop = false;
    }
});

function changeOpacity(x: string, o: string, i: number): void {
    if (symbolSwitchBool == false && checkArray[i] == true) {
        document.querySelector(x).setAttribute('style', 'opacity: ' + 100 + '%');
        symbolSwitchBool = true;
        checkArray[i] = false;
        player1Wins[i] = true;
    } 
    else if (symbolSwitchBool == true && checkArray[i] == true) {
        document.querySelector(o).setAttribute('style', 'opacity: ' + 100 + '%');
        symbolSwitchBool = false;
        checkArray[i] = false;
        player2Wins[i] = true;
    }
    detectWinnerP1();
    detectWinnerP2();
}

var index: number;
function nextGame(): void {
    // Opacity wieder Null:
    clearOpacity("#x1", "#o1");
    clearOpacity("#x2", "#o2");
    clearOpacity("#x3", "#o3");
    clearOpacity("#x4", "#o4");
    clearOpacity("#x5", "#o5");
    clearOpacity("#x6", "#o6");
    clearOpacity("#x7", "#o7");
    clearOpacity("#x8", "#o8");
    clearOpacity("#x9", "#o9");

    //Farbe zurücksetzen:
    resestToDefault();

    //Arrays zurücksetzen:
    for(index = 1; index <= 9; index++) {
        player1Wins[index] = false;
        player2Wins[index] = false;
        checkArray[index] = true;
    }

    //Starter wechseln:
    if (whoStarts == true) {
        whoStarts = false;
    }
    else if (preventTheOther == false) {
        whoStarts = true;
    }
    changeStarter();

    //Siegpunkt aufaddieren:
    if (countAWin == true && countForP1 == true) {
        winCounter1++;
        refreshScore();
        countAWin = false;
    }
    else if ( countAWin == true && countForP2 == true) {
        winCounter2++;
        refreshScore();
        countAWin = false;
    }
    //newGame var zurücksetzen:
    newGame = false;
}

function changeStarter(): void {
    if(whoStarts == true) {
        symbolSwitchBool = false;
        player1.setAttribute("style", "text-decoration: " + "underline");
        player2.setAttribute("style", "text-decoration: " + "none");
        preventTheOther = true;
    }
    else if(whoStarts == false) {
        symbolSwitchBool = true;
        player1.setAttribute("style", "text-decoration: " + "none");
        player2.setAttribute("style", "text-decoration: " + "underline");
        preventTheOther = false;
    }
}

function clearOpacity(x: string, o: string): void {
    document.querySelector(x).setAttribute("style", "opacity: " + 0);
    document.querySelector(o).setAttribute("style", "opacity: " + 0);
}

function refreshScore(): void {
    if(countForP1 == true) {
        score1.innerHTML = winCounter1 + " wins";
        countForP1 = false;
    }
    else if (countForP2 == true) {
        score2.innerHTML = winCounter2 + " wins";
        countForP2 = false;
    }
}


//Restart:
function restartGame(): void {
    clearOpacity("#x1", "#o1");
    clearOpacity("#x2", "#o2");
    clearOpacity("#x3", "#o3");
    clearOpacity("#x4", "#o4");
    clearOpacity("#x5", "#o5");
    clearOpacity("#x6", "#o6");
    clearOpacity("#x7", "#o7");
    clearOpacity("#x8", "#o8");
    clearOpacity("#x9", "#o9");

    for(index = 1; index <= 9; index++) {
        player1Wins[index] = false;
        player2Wins[index] = false;
        checkArray[index] = true;
    }

    //Schauen, dass der richtige Player wieder beginnt:
    if(preventTheOther == true) {
        symbolSwitchBool = false;
    }
    else if (preventTheOther == false) {
        symbolSwitchBool = true;
    }
}

//Win Detector Player 1:
var indexEndGame: number;
function detectWinnerP1(): void {
    if (player1Wins[1] == true && player1Wins[2] == true && player1Wins[3] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel2").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer1.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[4] == true && player1Wins[5] == true && player1Wins[6] == true) {
        document.querySelector("#kachel4").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel6").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer1.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[7] == true && player1Wins[8] == true && player1Wins[9] == true) {
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel8").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer1.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[1] == true && player1Wins[4] == true && player1Wins[7] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel4").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer1.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[2] == true && player1Wins[5] == true && player1Wins[8] == true) {
        document.querySelector("#kachel2").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel8").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer1.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[3] == true && player1Wins[6] == true && player1Wins[9] == true) {
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel6").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer1.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[1] == true && player1Wins[5] == true && player1Wins[9] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer1.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[3] == true && player1Wins[5] == true && player1Wins[7] == true) {
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer1.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
}

// Detect Winner Player 2
function detectWinnerP2(): void {
    if (player2Wins[1] == true && player2Wins[2] == true && player2Wins[3] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel2").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer2.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[4] == true && player2Wins[5] == true && player2Wins[6] == true) {
        document.querySelector("#kachel4").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel6").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer2.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[7] == true && player2Wins[8] == true && player2Wins[9] == true) {
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel8").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer2.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[1] == true && player2Wins[4] == true && player2Wins[7] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel4").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer2.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[2] == true && player2Wins[5] == true && player2Wins[8] == true) {
        document.querySelector("#kachel2").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel8").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer2.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[3] == true && player2Wins[6] == true && player2Wins[9] == true) {
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel6").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer2.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[1] == true && player2Wins[5] == true && player2Wins[9] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer2.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[3] == true && player2Wins[5] == true && player2Wins[7] == true) {
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        winPlayer2.play();
        for(indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function(): void {
            nextGame();
        }, 1500);
    }
}

//kachel-Farbe zurücksetzen:
var resetColors: string[] = [];
resetColors[1] = "#kachel1";
resetColors[2] = "#kachel2";
resetColors[3] = "#kachel3";
resetColors[4] = "#kachel4";
resetColors[5] = "#kachel5";
resetColors[6] = "#kachel6";
resetColors[7] = "#kachel7";
resetColors[8] = "#kachel8";
resetColors[9] = "#kachel9";

var colorIndex: number;

function resestToDefault(): void {
    for(colorIndex = 1; colorIndex <= 9; colorIndex++) {
        document.querySelector(resetColors[colorIndex]).setAttribute("style", "background-color: " + "rgba(255, 179, 179, 0.3)");
    }
}