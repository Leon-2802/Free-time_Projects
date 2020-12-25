//Player 1 und Player 2:
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var nextGameButton = document.getElementById("nextOne");
//Bools:
var symbolSwitchBool = false;
var whoStarts = true;
var preventTheOther = true;
var newGame = false;
var countAWin = false;
var countForP1 = false;
var countForP2 = false;
//Sieg-Counter:
var winCounter1 = 0;
var winCounter2 = 0;
//Check-if-already-checked-array:
var checkArray = [];
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
var player1Wins = [];
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
var player2Wins = [];
player2Wins[1] = false;
player2Wins[2] = false;
player2Wins[3] = false;
player2Wins[4] = false;
player2Wins[5] = false;
player2Wins[6] = false;
player2Wins[7] = false;
player2Wins[8] = false;
player2Wins[9] = false;
document.querySelector('#kachel1').addEventListener("click", function () {
    changeOpacity('#x1', '#o1', 1);
});
document.querySelector('#kachel2').addEventListener("click", function () {
    changeOpacity('#x2', '#o2', 2);
});
document.querySelector('#kachel3').addEventListener("click", function () {
    changeOpacity('#x3', '#o3', 3);
});
document.querySelector('#kachel4').addEventListener("click", function () {
    changeOpacity('#x4', '#o4', 4);
});
document.querySelector('#kachel5').addEventListener("click", function () {
    changeOpacity('#x5', '#o5', 5);
});
document.querySelector('#kachel6').addEventListener("click", function () {
    changeOpacity('#x6', '#o6', 6);
});
document.querySelector('#kachel7').addEventListener("click", function () {
    changeOpacity('#x7', '#o7', 7);
});
document.querySelector('#kachel8').addEventListener("click", function () {
    changeOpacity('#x8', '#o8', 8);
});
document.querySelector('#kachel9').addEventListener("click", function () {
    changeOpacity('#x9', '#o9', 9);
});
//Restart
document.querySelector('#restart').addEventListener("click", function () {
    restartGame();
});
//Next Game
nextGameButton.addEventListener("click", function () {
    nextGame();
});
function changeOpacity(x, o, i) {
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
var index;
function nextGame() {
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
    for (index = 1; index <= 9; index++) {
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
    else if (countAWin == true && countForP2 == true) {
        winCounter2++;
        refreshScore();
        countAWin = false;
    }
    //newGame var zurücksetzen:
    newGame = false;
}
function changeStarter() {
    if (whoStarts == true) {
        symbolSwitchBool = false;
        player1.setAttribute("style", "text-decoration: " + "underline");
        player2.setAttribute("style", "text-decoration: " + "none");
        preventTheOther = true;
    }
    else if (whoStarts == false) {
        symbolSwitchBool = true;
        player1.setAttribute("style", "text-decoration: " + "none");
        player2.setAttribute("style", "text-decoration: " + "underline");
        preventTheOther = false;
    }
}
function clearOpacity(x, o) {
    document.querySelector(x).setAttribute("style", "opacity: " + 0);
    document.querySelector(o).setAttribute("style", "opacity: " + 0);
}
function refreshScore() {
    if (countForP1 == true) {
        score1.innerHTML = winCounter1 + " wins";
        countForP1 = false;
    }
    else if (countForP2 == true) {
        score2.innerHTML = winCounter2 + " wins";
        countForP2 = false;
    }
}
//Restart:
function restartGame() {
    clearOpacity("#x1", "#o1");
    clearOpacity("#x2", "#o2");
    clearOpacity("#x3", "#o3");
    clearOpacity("#x4", "#o4");
    clearOpacity("#x5", "#o5");
    clearOpacity("#x6", "#o6");
    clearOpacity("#x7", "#o7");
    clearOpacity("#x8", "#o8");
    clearOpacity("#x9", "#o9");
    for (index = 1; index <= 9; index++) {
        player1Wins[index] = false;
        player2Wins[index] = false;
        checkArray[index] = true;
    }
    //Schauen, dass der richtige Player wieder beginnt:
    if (preventTheOther == true) {
        symbolSwitchBool = false;
    }
    else if (preventTheOther == false) {
        symbolSwitchBool = true;
    }
}
//Win Detector Player 1:
var indexEndGame;
function detectWinnerP1() {
    if (player1Wins[1] == true && player1Wins[2] == true && player1Wins[3] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel2").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[4] == true && player1Wins[5] == true && player1Wins[6] == true) {
        document.querySelector("#kachel4").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel6").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[7] == true && player1Wins[8] == true && player1Wins[9] == true) {
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel8").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[1] == true && player1Wins[4] == true && player1Wins[7] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel4").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[2] == true && player1Wins[5] == true && player1Wins[8] == true) {
        document.querySelector("#kachel2").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel8").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[3] == true && player1Wins[6] == true && player1Wins[9] == true) {
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel6").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[1] == true && player1Wins[5] == true && player1Wins[9] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player1Wins[3] == true && player1Wins[5] == true && player1Wins[7] == true) {
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP1 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
}
// Detect Winner Player 2
function detectWinnerP2() {
    if (player2Wins[1] == true && player2Wins[2] == true && player2Wins[3] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel2").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[4] == true && player2Wins[5] == true && player2Wins[6] == true) {
        document.querySelector("#kachel4").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel6").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[7] == true && player2Wins[8] == true && player2Wins[9] == true) {
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel8").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[1] == true && player2Wins[4] == true && player2Wins[7] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel4").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[2] == true && player2Wins[5] == true && player2Wins[8] == true) {
        document.querySelector("#kachel2").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel8").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[3] == true && player2Wins[6] == true && player2Wins[9] == true) {
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel6").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[1] == true && player2Wins[5] == true && player2Wins[9] == true) {
        document.querySelector("#kachel1").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel9").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
    else if (player2Wins[3] == true && player2Wins[5] == true && player2Wins[7] == true) {
        document.querySelector("#kachel3").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel5").setAttribute("style", "background-color: " + "#ffb3ff");
        document.querySelector("#kachel7").setAttribute("style", "background-color: " + "#ffb3ff");
        for (indexEndGame = 1; indexEndGame <= 9; indexEndGame++) {
            checkArray[indexEndGame] = false;
        }
        newGame = true;
        countAWin = true;
        countForP2 = true;
        setTimeout(function () {
            nextGame();
        }, 1500);
    }
}
//kachel-Farbe zurücksetzen:
var resetColors = [];
resetColors[1] = "#kachel1";
resetColors[2] = "#kachel2";
resetColors[3] = "#kachel3";
resetColors[4] = "#kachel4";
resetColors[5] = "#kachel5";
resetColors[6] = "#kachel6";
resetColors[7] = "#kachel7";
resetColors[8] = "#kachel8";
resetColors[9] = "#kachel9";
var colorIndex;
function resestToDefault() {
    for (colorIndex = 1; colorIndex <= 9; colorIndex++) {
        document.querySelector(resetColors[colorIndex]).setAttribute("style", "background-color: " + "rgba(255, 179, 179, 0.3)");
    }
}
//# sourceMappingURL=tic-tac.js.map