let size = 16;
const gridContainer = document.querySelector('.grid-container')
for (let totalDivs = size * size; totalDivs > 0; totalDivs--) {
    const div = document.createElement('div');
    div.classList.add('grid-tile');
    gridContainer.appendChild(div);
}