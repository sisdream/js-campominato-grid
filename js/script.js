// CRAARE LE COSTATNTI
const gridCont = document.getElementById("grid");
const play = document.getElementById("play");
const difficulty = document.getElementById("difficulty");
const lost = document.getElementById("lost");
let points = 0;
let isGameOver = false;
let bombe = [];

play.addEventListener("click", function () {
    isGameOver = false;
    gridCont.innerHTML = "";
    points = 0;

    const value = parseInt(difficulty.value);
    if (value === 1) {
        createGrid(100, "easy");
    } else if (value === 2) {
        createGrid(81, "medium");
    } else {
        createGrid(49, "hard");
    }
});

// METODO PER CREARE LA GRIGLIA
function createGrid(difficulty, difficultyString) {
    gridCont.innerHTML = "";
    bombe = generaArrayBombe(difficulty);

    for (let i = 1; i <= difficulty; i++) {
        let square = createElement("div", "square");

        square.classList.add(difficultyString);
        square.innerHTML = i;

        square.addEventListener("click", () => {
            if (!isGameOver) {
                controllaSeBomba(i, square, bombe);
            }
        });

        gridCont.appendChild(square);
    }
}

// METODO DI CONTROLLO PER I PUNTI
function controllaSeBomba(squareIndex, square, bombe) {
    if (bombe.indexOf(squareIndex) !== -1) {
        square.classList.add("bomb");
        isGameOver = true;

        // recuperare la lista di quadrati
        const squareList = document.querySelectorAll(".square");
        // controllare ogni quadrato se è una bomba
        for (let i = 0; i < squareList.length; i++) {
            const square = squareList[i];

            if (bombe.indexOf(parseInt(square.innerText)) !== -1) {
                square.classList.add("bomb");
            }
        }
        // alert(`Hai perso. Gioca ancora. Hai totalizzato: ${points} punti.`);
        lost.innerHTML = `
            <p class="testo">
                Hai totalizzato ${points} punti. 
                <i class="fa-solid fa-poo"></i>
            </p>
        `;
        
    } else {
        if (!square.classList.contains("safe")) {
            square.classList.add("safe");
            points += 1;
        }
    }
}

// METODO PER CREARE IL SINGOLO ELEMENTO DELLA GRIGLIA
function createElement(elementType, elementClass) {
    let newElement = document.createElement(elementType);
    newElement.classList.add(elementClass);

    return newElement;
}

// METODO CHE GENERA UN NUMERO RANDOM
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// GENERATORE NUMERI UNIVOCI
function generaArrayBombe(max) {
    let arr = [];

    while (arr.length < 16) {
        let randomNum = numeroRandom(1, max);
        if (arr.indexOf(randomNum) === -1) arr.push(randomNum);
    }
    return arr;
}
