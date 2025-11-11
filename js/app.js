// EVENT LISTENERS 1-5
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

// USER INTERACTIONS 6-7
//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.


/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', ''];
let turn = 'X';
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');

/*-------------------------------- Functions --------------------------------*/

const updateBoard = () => {
    board.forEach((cell, index) => {
       const square = squareEls[index];
       square.textContent = cell; 

       if (cell === 'X') {
        square.innerText = 'X';
       } else if (cell === 'O') {
        square.innerText = 'O';
       }
    });
}

const updateMessage = () => {
    if(winner === false && tie === true) {
        return 'It is a tie!';
    } else if (winner === false && tie === false) {
        return `It's ${turn}'s turn!`;
    } else {
        return `Congrats! ${winner} is the winner!`;
    }
}

const render = () => {
    updateBoard();
    messageEl.textContent = updateMessage();
}

const init = () => {
    render();
}

init();

/*----------------------------- Event Listeners -----------------------------*/



