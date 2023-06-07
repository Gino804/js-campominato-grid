console.log('JS OK');

// Creo una funzione che crei una cella contenente un numero
const createCell = (n) =>
{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = n;
    return cell;
}

// Recupero gli elementi dal DOM
const playButton = document.getElementById('play');
console.log(playButton);

const grid = document.getElementById('grid');
console.log(grid);

// Stabilisco il numero di righe e di colonne della griglia
const rows = 10;
const cols = 10;

// Calcolo le celle totali moltiplicando righe e colonne
const totalCells = rows * cols;

// Quando l'utente clicca sul bottone
playButton.addEventListener('click', function()
{
    for(i = 1; i <= totalCells; i++)
    {
        const cell = createCell(i);
        grid.appendChild(cell);

        // Quando l'utente clicca su una cella
        cell.addEventListener('click', function()
        {
            // Stampo in console il numero della cella
            console.log(cell.innerText);

            // Coloro la cella d'azzurro
            cell.classList.add('bg-blue');
        })
    }
})
