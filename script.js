const resizeBtn = document.querySelector('.resize-button');
const gridContainer = document.querySelector('.grid-container')
const grayBtn = document.querySelector('.grayscale-button');
const colorBtn = document.querySelector('.color-button');
resizeBtn.addEventListener('click', () => resize())
grayBtn.addEventListener('click', () => modeSwap('grayscale'));
colorBtn.addEventListener('click', () => modeSwap('color'))//hooking up the basic items

let mode = 'normal';

generateGrid(16);

function modeSwap(newMode) {
    mode = newMode;
}

function generateGrid(size) {
    for (let totalDivs = size * size; totalDivs > 0; totalDivs--) {
        const div = document.createElement('div');
        div.classList.add('grid-tile');
        gridContainer.appendChild(div);
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        const gridTiles = document.querySelectorAll('.grid-tile');
        gridTiles.forEach(tile => tile.addEventListener('mouseover', activateTile))
    }
}

function resize() {
    let gridSize = prompt(`How big should the canvas be?
    MAX: 80`, 16);
    if (gridSize>80) gridSize = 80;
    if (gridSize < 1) gridSize = 1; 
    removeAllChildNodes(gridContainer);
    generateGrid(gridSize);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function darken(node) {
    if (node.style.index === undefined) {
        node.style.index = 90;
        node.style.backgroundColor = `hsl(0, 0%, ${node.style.index}%`
    } else if (node.style.index == 0){
        return
    } else {
        console.log('bruh')
        node.style.index -= 10;
        node.style.backgroundColor = `hsl(0, 0%, ${node.style.index}%`
    }
}
function activateTile(e) {
   if (mode === 'normal') {
     e.target.classList.add('active')
   } else if (mode==='grayscale'){
    darken(e.target)
   } else if (mode === 'color') {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    e.target.style.backgroundColor = `#${randomColor}`
   }
}