//HTML-Elements:
var playerOneX = document.getElementById("1x");
var playerOneO = document.getElementById("1o");
var playerTwoX = document.getElementById("2x");
var playerTwoO = document.getElementById("2o");
//Bools:
var symbolSwitchBool = false;
var XoBool = false;
var Case1or2Bool = false;
//
document.querySelector('#kachel1').addEventListener("click", function () {
    changeOpacity('#x1', '#o1');
});
document.querySelector('#kachel2').addEventListener("click", function () {
    changeOpacity('#x2', '#o2');
});
document.querySelector('#kachel3').addEventListener("click", function () {
    changeOpacity('#x3', '#o3');
});
document.querySelector('#kachel4').addEventListener("click", function () {
    changeOpacity('#x4', '#o4');
});
document.querySelector('#kachel5').addEventListener("click", function () {
    changeOpacity('#x5', '#o5');
});
document.querySelector('#kachel6').addEventListener("click", function () {
    changeOpacity('#x6', '#o6');
});
document.querySelector('#kachel7').addEventListener("click", function () {
    changeOpacity('#x7', '#o7');
});
document.querySelector('#kachel8').addEventListener("click", function () {
    changeOpacity('#x8', '#o8');
});
document.querySelector('#kachel9').addEventListener("click", function () {
    changeOpacity('#x9', '#o9');
});
//Restart
document.querySelector('#restart').addEventListener("click", function () {
    restart();
});
//Select X/O:
document.querySelector('.x-button').addEventListener("click", function () {
    symbolSwitchBool = false;
    XoBool = true;
    Case1or2Bool = true;
    showXO();
    hideXO(playerOneO, playerTwoX);
});
document.querySelector('.o-button').addEventListener("click", function () {
    symbolSwitchBool = true;
    XoBool = true;
    Case1or2Bool = false;
    showXO();
    hideXO(playerOneX, playerTwoO);
});
document.querySelector(".x-button2").addEventListener("click", function () {
    symbolSwitchBool = true;
    XoBool = true;
    Case1or2Bool = false;
    showXO();
    hideXO(playerOneX, playerTwoO);
});
document.querySelector(".o-button2").addEventListener("click", function () {
    symbolSwitchBool = false;
    XoBool = true;
    Case1or2Bool = true;
    showXO();
    hideXO(playerOneO, playerTwoX);
});
function changeOpacity(x, y) {
    if (symbolSwitchBool == false) {
        document.querySelector(x).setAttribute('style', 'opacity: ' + 100 + '%');
        symbolSwitchBool = true;
    }
    else if (symbolSwitchBool == true) {
        document.querySelector(y).setAttribute('style', 'opacity: ' + 100 + '%');
        symbolSwitchBool = false;
    }
}
function restart() {
    window.location.reload(false);
}
function showXO() {
    if (XoBool == true && Case1or2Bool == true) {
        playerOneX.classList.remove("hidden");
        playerTwoO.classList.remove("hidden");
    }
    else if (XoBool == true && Case1or2Bool == false) {
        playerOneO.classList.remove("hidden");
        playerTwoX.classList.remove("hidden");
    }
}
function hideXO(firstLetter, secondLetter) {
    firstLetter.classList.add("hidden");
    secondLetter.classList.add("hidden");
}
//# sourceMappingURL=tic-tac.js.map