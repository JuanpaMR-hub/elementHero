
let agua = "Agua";
let fuego = "Fuego";
let hierba = "Hierba";

function showInfo(){
    
    let counterInfo ="1: Agua\n2: Fuego\n3: Hierba";
    return counterInfo;

}

function randomElement() {
    let randomInt = Math.floor(Math.random() * 3);
    console.log("Random Int"+randomInt);
    switch(randomInt+1){
        case 1:
            console.log(agua);
            return agua;
        case 2:
            console.log(fuego);
            return fuego;
        case 3:
            console.log(hierba);
            return hierba;
        default:
            console.log("Error al randomizar elemento");
    }
};

function checkAnswer(answer,element){
    console.log(answer + "==" + element) ;
    switch(element){
        
        case "Agua":
            //Hierba(3) vence a Agua            
            if(answer == 3){
                return true;
            }
            break;
        case "Fuego":
            //Agua(1) vence a Fuego
            if(answer == 1){
                return true;
            }
            break;
        case "Hierba":
            //Fuego(2) vence a Hierba
            if(answer == 2 ){
                return true;
            }
            break;
        default:
            console.log("Error al revisar respuesta");
    }
}

function singleElementLevel() {
    let passed = false;
    do{
        let randomPick = randomElement();
        let answer = prompt(showInfo()+"\nQue elemento vence a:\n"+randomPick);
        if (checkAnswer(answer,randomPick)) {
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


alert(`Bienvenido a Element Hero!`)
alert(`***INTRODUCCIÓN****
Los elementos que se mostrarán tienen uno que le combate, por ejemplo el fuego quema a la hierba, la hierba absorbe el agua, el agua apaga el fuego
Se mostrará información de los elementos al igual que sus indices
`)


alert("Se juega de la siguiente manera, escribe el index del counter del siguiente elemento");
singleElementLevel();



alert("Felicidades! Has superado tu primer obstaculo \n intentemos otro \n Nuevamente aquí está la tabla de counters\n- Agua vence a Fuego \n- Fuego vence a Agua\n- Hierba vence a Agua");
singleElementLevel();

alert("Creo que ya lo tienes!");

singleElementLevel();

alert("Muy bien!\nTienes lo necesario para convertirte en un Heroe de los Elementos")

/*Posibles futuras funciones:
1. Sistema de puntos
2. Memorice donde no se disponga "show info"
*/


