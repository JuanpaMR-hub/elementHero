alert("Bienvenido a Element Hero");
alert("Para comenzar, abra la sección de inspección del navegador");

console.log("Hola! \n Este es el inicio del juego")
console.log("***INTRODUCCIÓN****");
console.log("Los elementos que se mostrarán tienen uno que le combate, por ejemplo el fuego quema a la hierba, la hierba absorbe el agua, el agua apaga el fuego");
console.log("En la siguiente tabla verás el 'counter' de cada uno");
let elementos = ["Agua","Fuego","Hierba"];
let counters = ["Hierba","Agua","Fuego"];
counterTable = {elementos:elementos , counter:counters};

console.table(counterTable);


function randomElement(){
    let randomInt = Math.floor(Math.random() * 3);
    return elementos[randomInt];
};

function singleElementLevel(){
    let passed = false;
    let randomPick = randomElement();
    while (passed === false){
        let answer = prompt(randomPick);
        if(findIndex(answer) === findIndex(randomPick)){
            passed = true;
            alert("Buen trabajo!");
            console.clear();
        }else{
            alert("Intentalo denuevo");
        }
    };

}

console.log("Se juega de la siguiente manera, escribe el index del counter del siguiente elemento");
singleElementLevel();


