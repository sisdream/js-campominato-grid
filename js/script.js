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

// LIVELLO EASY
easyLevel.addEventListener("click", () => createGrid(100));
// LIVELLO MEDIUM
mediumLevel.addEventListener("click", () => createGrid(81));
// LIVELLO HARD
hardLevel.addEventListener("click", () => createGrid(49));

// Funzione x griglia

function generateGride(container){
    gridCont.innerHTML = '';

    for(let i = 0; i < 46; i++){
        const squere = generateSquare();
        container.append(squere);
    }
}
