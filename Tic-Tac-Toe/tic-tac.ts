//HTML-Elements:
const playerOneX: HTMLElement = document.getElementById("1x");
const playerOneO: HTMLElement = document.getElementById("1o");
const playerTwoX: HTMLElement = document.getElementById("2x");
const playerTwoO: HTMLElement = document.getElementById("2o");

//Bools:
let symbolSwitchBool: boolean = false;
let XoBool: boolean = false;
let Case1or2Bool: boolean = false;

//Check-if-already-checked-array:
let checkArray: boolean[] = [];
checkArray[1] = true;
checkArray[2] = true;
checkArray[3] = true;
checkArray[4] = true;
checkArray[5] = true;
checkArray[6] = true;
checkArray[7] = true;
checkArray[8] = true;
checkArray[9] = true;

document.querySelector('#kachel1').addEventListener("click", function() {
    changeOpacity('#x1', '#o1', 1);
});
document.querySelector('#kachel2').addEventListener("click", function() {
    changeOpacity('#x2', '#o2', 2);
});
document.querySelector('#kachel3').addEventListener("click", function() {
    changeOpacity('#x3', '#o3', 3);
});
document.querySelector('#kachel4').addEventListener("click", function() {
    changeOpacity('#x4', '#o4', 4);
});
document.querySelector('#kachel5').addEventListener("click", function() {
    changeOpacity('#x5', '#o5', 5);
});
document.querySelector('#kachel6').addEventListener("click", function() {
    changeOpacity('#x6', '#o6', 6);
});
document.querySelector('#kachel7').addEventListener("click", function() {
    changeOpacity('#x7', '#o7', 7);
});
document.querySelector('#kachel8').addEventListener("click", function() {
    changeOpacity('#x8', '#o8', 8);
});
document.querySelector('#kachel9').addEventListener("click", function() {
    changeOpacity('#x9', '#o9', 9);
});

//Restart
document.querySelector('#restart').addEventListener("click", function() {
    restart();
});

//Select X/O:
document.querySelector('.x-button').addEventListener("click", function() {
    symbolSwitchBool = false;
    XoBool = true;
    Case1or2Bool = true;
    showXO();
    hideXO(playerOneO, playerTwoX);
});
document.querySelector('.o-button').addEventListener("click", function() {
    symbolSwitchBool = true;
    XoBool = true;
    Case1or2Bool = false;
    showXO();
    hideXO(playerOneX, playerTwoO);
});
document.querySelector(".x-button2").addEventListener("click", function() {
    symbolSwitchBool = true;
    XoBool = true;
    Case1or2Bool = false;
    showXO();
    hideXO(playerOneX, playerTwoO);
});
document.querySelector(".o-button2").addEventListener("click", function() {
    symbolSwitchBool = false;
    XoBool = true;
    Case1or2Bool = true;
    showXO();
    hideXO(playerOneO, playerTwoX);
});

function changeOpacity(x: string, y: string, i: number) {
    if (symbolSwitchBool == false && checkArray[i] == true) {
        document.querySelector(x).setAttribute('style', 'opacity: ' + 100 + '%');
        symbolSwitchBool = true;
        checkArray[i] = false;
    } 
    else if (symbolSwitchBool == true && checkArray[i] == true) {
        document.querySelector(y).setAttribute('style', 'opacity: ' + 100 + '%');
        symbolSwitchBool = false;
        checkArray[i] = false;
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

function hideXO(firstLetter: HTMLElement, secondLetter: HTMLElement) {
    firstLetter.classList.add("hidden");
    secondLetter.classList.add("hidden");
}