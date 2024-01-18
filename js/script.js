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

// livello easy
easyLevel.addEventListener("click", () => generateGride(100));
// livello hard
mediumLevel.addEventListener("click", () => generateGride(88));
// livello hard
hardLevel.addEventListener("click", () => generateGride(64));


// Funzione x griglia

function generateGride(container){
    gridCont.innerHTML = '';

    for(let i = 0; i < 100; i++){
        const squere = generateSquare();
        container.append(squere);
    };
}

//  funzione x cella

function generateSquare(){
    const square = document.createElement(`div`);
    square.classList.add(`square`);
    square.addEventListener('click', function(){
        this.classList.toggle('safe');
    });
    return square;
}

