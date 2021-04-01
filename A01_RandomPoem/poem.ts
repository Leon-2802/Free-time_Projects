namespace RandomPoem {
    let subjects: string[] = ["Anakin ", "Obi-Wan ", "Yoda ", "Grogu ", "Padmé ", "Jar Jar Binks "];
    let verbs: string[] = ["fliegt nach ", "besiegt ", "besucht ", "bestielt ", "hintergeht ", "unterschätzt "];
    let ends: string[] = ["den Highground ", "den Imperator ", "Naboo ", "einen imperialen Scout ", "seinen Mentor ", "Rancor Ragù "];

    let counter: number = 0;

    let poem: string = "";
    let completePoem: string[] = [];

    console.log("Press Enter");

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 13) {
            completePoem = [];
            counter = 0;
            selectRandomWords()
        }
    });

    function selectRandomWords(): void {
        for(let i: number = subjects.length; i > 0; i--) {
            let min: number;
            let max: number;
            min = Math.ceil(0);
            max = Math.floor(5);

            //random Nummern berechnen:
            let random1: number = Math.floor(Math.random() * (max - min +1)) + min;

            let random2: number = Math.floor(Math.random() * (max - min +1)) + min;

            let random3: number = Math.floor(Math.random() * (max - min +1)) + min;

            assemblePoem(random1, random2, random3);

            counter++;
            if(counter >= 6) {
                for(let i: number = 0; i < completePoem.length; i++) {
                    console.log(completePoem[i]);
                }
                console.log("-----------------------");
                console.log("Press Enter again to generate a new poem:");
            }
        }
    }

    function assemblePoem(a: number, b: number, c: number): void {
        let first: string = subjects[a];
        poem += first;
        let second: string = verbs[b];
        poem += second;
        let third: string = ends[c];
        poem += third;
        completePoem.push(poem);
        poem = "";
    }
}