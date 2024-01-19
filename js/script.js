// CRAARE LE COSTATNTI
const gridCont = document.getElementById("grid");
const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");
let points = 0;


// LIVELLO FACILE
easyButton.addEventListener("click", () => createGrid(100));
// LIVELLO MEDIO
mediumButton.addEventListener("click", () => createGrid(81));
// LIVELLO DIFFICILE
hardButton.addEventListener("click", () => createGrid(49));


// METODO PER CREARE LA GRIGLIA
function createGrid(difficulty){  
    gridCont.innerHTML = "";
    const bombe = generaArrayBombe(difficulty);

    for(let i = 1; i <= difficulty; i++){
        let square = createElement("div", "square");
        square.innerHTML = i;
        square.addEventListener("click", () => controllaSeBomba(i, square, bombe));

        gridCont.appendChild(square);
    };
};

// METODO DI CONTROLLO PER I PUNTI
function controllaSeBomba(squareIndex, square, bombe){
    if(bombe.indexOf(squareIndex) !== -1){
        square.classList.add("bomb");
        alert(`Hai perso. Gioca ancora. Hai totalizzato: ${points} punti.`);
        gridCont.innerHTML = "";
        points = 0;
    } else {
        if(!square.classList.contains('safe')){                   
            square.classList.add("safe");
            points += 1;
        };
    };
}

// METODO PER CREARE IL SINGOLO ELEMENTO DELLA GRIGLIA
function createElement(elementType, elementClass){
    let newElement = document.createElement(elementType);
    newElement.classList.add(elementClass);
    
    return newElement;
}

// METODO CHE GENERA UN NUMERO RANDOM
function numeroRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// GENERATORE NUMERI UNIVOCI
function generaArrayBombe(max){
    let arr = [];

    while(arr.length < 16) {
        let randomNum = numeroRandom(1, max);
        if(arr.indexOf(randomNum) === -1) arr.push(randomNum);
    };
    return arr;
};

