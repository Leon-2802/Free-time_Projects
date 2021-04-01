var RandomPoem;
(function (RandomPoem) {
    var subjects = ["Anakin ", "Obi-Wan ", "Yoda ", "Grogu ", "Padmé ", "Jar Jar Binks "];
    var verbs = ["fliegt nach ", "besiegt ", "besucht ", "bestielt ", "hintergeht ", "unterschätzt "];
    var ends = ["den Highground ", "den Imperator ", "Naboo ", "einen imperialen Scout ", "seinen Mentor ", "Rancor Ragù "];
    var counter = 0;
    var poem = "";
    var completePoem = [];
    console.log("Press Enter");
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 13) {
            completePoem = [];
            counter = 0;
            selectRandomWords();
        }
    });
    function selectRandomWords() {
        for (var i = subjects.length; i > 0; i--) {
            var min = void 0;
            var max = void 0;
            min = Math.ceil(0);
            max = Math.floor(5);
            //random Nummern berechnen:
            var random1 = Math.floor(Math.random() * (max - min + 1)) + min;
            var random2 = Math.floor(Math.random() * (max - min + 1)) + min;
            var random3 = Math.floor(Math.random() * (max - min + 1)) + min;
            assemblePoem(random1, random2, random3);
            counter++;
            if (counter >= 6) {
                for (var i_1 = 0; i_1 < completePoem.length; i_1++) {
                    console.log(completePoem[i_1]);
                }
                console.log("-----------------------");
                console.log("Press Enter again to generate a new poem:");
            }
        }
    }
    function assemblePoem(a, b, c) {
        var first = subjects[a];
        poem += first;
        var second = verbs[b];
        poem += second;
        var third = ends[c];
        poem += third;
        completePoem.push(poem);
        poem = "";
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=poem.js.map