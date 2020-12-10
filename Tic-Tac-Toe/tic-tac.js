var switchBool = false;
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
    switchBool = false;
});
document.querySelector('.o-button').addEventListener("click", function () {
    switchBool = true;
});
function changeOpacity(x, y) {
    if (switchBool == false) {
        document.querySelector(x).setAttribute('style', 'opacity: ' + 100 + '%');
        switchBool = true;
    }
    else if (switchBool == true) {
        document.querySelector(y).setAttribute('style', 'opacity: ' + 100 + '%');
        switchBool = false;
    }
}
function restart() {
    window.location.reload(false);
}
//# sourceMappingURL=tic-tac.js.map