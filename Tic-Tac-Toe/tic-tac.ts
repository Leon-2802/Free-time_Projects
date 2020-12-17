//Player 1 und Player 2:
const player1:HTMLElement = document.getElementById("player1");
const player2:HTMLElement = document.getElementById("player2");
//Bools:
let symbolSwitchBool: boolean = false;
let whoStarts: boolean = true;
let preventTheOther: boolean = true;

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

function changeOpacity(x: string, o: string, i: number): void {
    if (symbolSwitchBool == false && checkArray[i] == true) {
        document.querySelector(x).setAttribute('style', 'opacity: ' + 100 + '%');
        symbolSwitchBool = true;
        checkArray[i] = false;
    } 
    else if (symbolSwitchBool == true && checkArray[i] == true) {
        document.querySelector(o).setAttribute('style', 'opacity: ' + 100 + '%');
        symbolSwitchBool = false;
        checkArray[i] = false;
    }
}

var index: number;
function restart(): void {
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

    //checkArray zurücksetzen:
    for(index = 1; index <= 9; index++) {
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