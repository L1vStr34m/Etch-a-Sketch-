const heading = document.createElement('h1');
heading.textContent = 'Etch-a-Sketch';
document.body.appendChild(heading);

const resetButton = document.createElement('button');
resetButton.id = 'reset-btn';
resetButton.textContent = 'Reset Grid';
document.body.appendChild(resetButton);

const gridContainer = document.createElement('div');
gridContainer.id = 'grid-container';
document.body.appendChild(gridContainer);

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const resetBtn = document.getElementById('reset-btn');

    function createGrid(size) {
        gridContainer.innerHTML = '';
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        
        let i = 0;

        for (
            i = 0; i < size*size; 
            i++ ) 
            {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'black';
            });
            
            gridContainer.appendChild(gridItem);
        }
    }

    // Function to reset the grid
    function resetGrid() {
        let newSize = prompt("Enter a new grid size (e.g., 16 for a 16x16 grid):");
        newSize = parseInt(newSize);

        if (newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    }
    let defaultGrid = 16;
    createGrid(defaultGrid); // Start with a default 16x16 grid
    resetBtn.addEventListener('click', resetGrid);
});
