// CREARE LE COSTANTI

const gridCont = document.getElementById("grid");
const easyLevel = document.getElementById("easy");
const mediumLevel = document.getElementById("medium");
const hardLevel = document.getElementById("hard");
const playButton = document.getElementById("play");
let points = 0;
generateGride(gridCont);


playButton.addEventListener('click', function(){
    generateGride(gridCont);
});


// FUNZIONE PER CREARE LA GRIGLIA

function generateGride(container){
    gridCont.innerHTML = '';

    for(let i = 1; i < 100 + 1; i++){
        const squere = generateSquare(i);
        container.append(squere);
    }
}

//  FUNZIONE PER CREARE CELLA

function generateSquare(text){
    const square = document.createElement(`div`);
    square.classList.add(`square`);
    square.innerText = text;
    square.addEventListener('click', function(){
        this.classList.toggle('safe');
    });
    return square;
}

// METODO CHE GENERA UN NUMERO RANDOM

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

