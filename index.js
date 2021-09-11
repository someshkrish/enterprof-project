boardCells = document.querySelectorAll('.Board-cell');
winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[0,3,6],[2,5,8]];

let gameStart = "start", turn = 'x';

const checkWinning = (currentTurn) => {
    return winningCombinations.some(combination => {
        return combination.every(cell => {
            return boardCells[cell].classList.contains(currentTurn); 
        });
    });
}

const checkDraw = () => {
    return winningCombinations.every(combination => {
        return combination.every(cell => {
            return boardCells[cell].classList.contains('x') || boardCells[cell].classList.contains('o'); 
        });
    });
}

const clickHandler = (event) => {
    if(event.target.classList.contains('x') || event.target.classList.contains('o'))
        return;
    event.target.classList.add(turn);
    event.target.querySelector('.player').innerHTML = turn;

    if(checkWinning(turn)) {
        alert(`${turn} has won!!!`);
        location.reload();
    } else if(checkDraw()) {
        alert(`DRAW!!!`);
        location.reload();
    }

    turn = (turn === 'x') ? 'o' : 'x';
}

if(gameStart){
    boardCells.forEach(el => {
        el.addEventListener('click', clickHandler);
    });
}