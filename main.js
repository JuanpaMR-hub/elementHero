
let elementos = ["Agua", "Fuego", "Hierba"];
let counters = ["Hierba", "Agua", "Fuego"];


function showInfo(){
    
    let counterInfo ="0: Hierba\n1: Agua\n2: Fuego";
    return counterInfo;
}

function randomElement() {
    let randomInt = Math.floor(Math.random() * 3);
    return elementos[randomInt];
};

function singleElementLevel() {
    let passed = false;
    do{
        let randomPick = randomElement();
        let answer = prompt(showInfo()+"\nQue elemento vence a:\n"+randomPick);
        if (answer == elementos.indexOf(randomPick)) {
            passed = true;
            alert("Buen trabajo!");
            console.clear();
        }else if(answer == "null"){
            break;
        }else{
            alert("Intentalo denuevo");
        }

    }while (passed === false);

};

function multipleElementsLevel(numElements) {
    let passed = false;

    do {
        //Llenando array de elementos dependiendo de cuantos se necesiten
        let elementsArray = [];
        for (let i = 0; i < numElements; i++) {
            elementsArray.push(randomElement());
        };

        //Respuesta del usuario "00"
        let answer = prompt(showInfo()+"\nQue elementos vencen a:\n"+elementsArray.toString());

        //Para poder compararlos, cambiaremos los elementos del array "elementsArray" y dejaremos sus respectivos index
        for (let i = 0; i < elementsArray.length; i++) {
            elementsArray[i] = elementos.indexOf(elementsArray[i]);
        }

        //Revisamos si la respuesta es correcta
        if (answer.split("") == elementsArray.toString()) {
            alert("Buen trabajo!");
            passed = true;
            console.clear();
        } else {
            alert("Respuesta incorrecta");
        }

    }while(passed === false);

    

}

alert(`Bienvenido a Element Hero!`)
alert(`***INTRODUCCIÓN****
Los elementos que se mostrarán tienen uno que le combate, por ejemplo el fuego quema a la hierba, la hierba absorbe el agua, el agua apaga el fuego
Se mostrará información de los elementos al igual que sus indices
`)


alert("Se juega de la siguiente manera, escribe el index del counter del siguiente elemento");
singleElementLevel();



alert("Felicidades! Has superado tu primer obstaculo \n intentemos otro \n Nuevamente aquí está la tabla de counters\n- Hierba vence a Agua\n- Agua vence a Fuego\n- Fuego vence a Agua");
singleElementLevel();

alert("Creo que ya lo tienes!");

alert("oh.. ahora hay más elementos... ¿quizás si escribes los numeros continuos uno del otro funcionará? \n Ejemplo: '00'");
multipleElementsLevel(2);

alert("Maravilloso!\n Ahora tienes lo necesario para continuar\nVeamos que tal sería con mas elementos");
multipleElementsLevel(4);

alert("Muy buen trabajo!\nTienes lo necesario para ser un Heroe de los Elementos");

/*Posibles futuras funciones:
1. Sistema de puntos
2. Menu de acceso para seleccionar la cantidad de elementos
3. Memorice donde no se disponga "show info"
*/


