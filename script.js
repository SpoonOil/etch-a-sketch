const resizeBtn = document.querySelector('.resize-button');
const gridContainer = document.querySelector('.grid-container')
resizeBtn.addEventListener('click', () => resize())
//hooking up the basic items

generateGrid(16);

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
    MAX: 100`, 16);
    removeAllChildNodes(gridContainer);
    generateGrid(gridSize);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function activateTile(e) {
    e.target.classList.add('active')
}