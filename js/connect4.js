//==============================================================//
//              JAVASCRIPT VARIABLES & FUNCTIONS                //
//==============================================================//

//========================================//
//              CREATE BOARD              //
//========================================//
const maxRows = 6;
const maxCols = 7;
// create empty array for the game board to live
let board = [];
// define a function that generates the board
const createBoard = () => {
  // declare a variable that is equal to the connectFour id
  const $board = $('#connectFour');
  // use a for loop to create the rows of the board
  for (let row = 0; row < maxRows; row++) {
    // create an empty array for the rows so that I can push the class name of the player houses to it
    let boardRow = [];
    // declare a variable for the actual rows and make them divs
    const $row = $('<div>')
      // give them a class of 'row'
      .addClass('row');
    // use another for loop to create the columns (circles) of the board
    for (let col = 0; col < maxCols; col++) {
      // declare a variable for the actual columns and make them divs
      const $col = $('<div>')
      // give them a class of 'col'
      .addClass('col')
      // also give them a unique id to show what row/col the houses are in
      .attr('id', 'cell-' + row.toString() + '-' + col.toString())
      // call the onclick function that puts the house crests on the board
      .one('click', move)
    // push the columns class name to the boardRow array
    boardRow.push($col.attr('class'));
    // append the column to the row
    $row.append($col);
    }
    // push the boardRow to the board array
    board.push(boardRow);
    // append the row to the board
    $board.append($row);
  }

  for (row = 0; row < maxRows; row++) {
    for (col = 0; col < maxCols; col++) {
      board[row][col] = null;
    }
  }
}

// make an empty array to push the selected houses to
  const $players = [];
// declare variables for the players, but don't assign values
  let $playerOne;
  let $playerTwo;

// define a function that will prompt the user to pick a house (use a modal)
const selectHouse = () => {
  $('#selectHouse').show(2000);
  // create event for when crest is clicked
  $('#selectHouseBox > div').one('click', (event) => {
    // give crest low opacity upon being clicked to tell the user it's already been chosen
    $(event.currentTarget).css('opacity', '0.2');
    // push the crest class to the players array
    console.log($(event.currentTarget).attr('class'));
    $players.push($(event.currentTarget).attr('class'));

      // if ($players[0] === undefined) {
      //   console.log('this code is up to no good');
      // } else {
      //   console.log('mischief managed');
      // }

    // write if else statements that will check for if two houses were selected
    if ($players.length === 2) {
    // close modal if it returns true
      closeModal();
      event.stopPropagation();
    } else {
      // do nothing
    }

    // assign the array indexes to the player variables
    $playerOne = $players[0];
    $playerTwo = $players[1];
    // append the images to the respective player divs
    $('#playerOne').attr('class', $playerOne);
    $('#playerTwo').attr('class', $playerTwo);
    // console.log($players);
  })
}

// define the function that will close the select house modal upon the two players selections
const closeModal = () => {
  // hide the modal
  $('#selectHouse').hide(1000);
}

// define a function that pops up a new modal (the sorting hat) to state who goes first
// const sortingHat = () => {
//   $('#hatBox').show(2000);
//   const first = $players[Math.floor(Math.random() *
//    $players.length)];
//   console.log('Better be...' + first + '!');
// }

// make an array of moves that goes up to the number of circles
  const moves = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];



// define a function called move that will house the click event for adding the house crest to the selected circle
const move = () => {
  // declare a variable for coordinates and give it the value of the current target along with a unique id
  let coords = $(event.currentTarget).attr('id').split('-');
  //---------------------------------------------------------//
      console.log('current row: ' + coords[1]);
      console.log('current col: ' + coords[2]);
      console.log($(event.currentTarget).attr('id'));
  //---------------------------------------------------------//
  // declare a variable called currentPlayer and set it equal to check if the move is divisible by two and update the currentPlayer variable accordingly
  let currentPlayer = ((moves[0] % 2 !== 0) ? $playerOne : $playerTwo);
  // add the class of the currentPlayer
  $(event.currentTarget).addClass(currentPlayer);
    board[coords[1]][coords[2]] = currentPlayer;
  moves.shift();
      console.log(board);
    // call function called isGameOver(currentPlayer)
    let isWinner = evaluatePlayerRow(currentPlayer);
    if (isWinner) {
      console.log('The winner is ' + currentPlayer);
    } else if (moves.length === 0) {
      console.log('The game is a draw!');
    }
  }

// general rules
// . cell can contain one of the following values: null, playerOne, or playerTwo
//


// row rules
// . if currentPlayer has four consecutive cells in a row, currentPlayer wins
// . for the current cell, if current cell equals currentPlayer increment currentPlayer row counter
// . for the current cell, if current cell does not equal currentPlayer increment gap counter and set row counter to zero


// column rules
// . if current player has four consecutive cells in a column, currentPlayer wins
// . for the current cell, if current cell equals currentPlayer increment currentPlayer column counter
// . for the current cell, if current cell does not equal currentPlayer increment gap counter and set row counter to zero

const evaluatePlayerRow = (currentPlayer) => {
  console.log('entering: evaluatePlayerRow');
  let isWinner = false;
  for (row = 0; row < maxRows; row++) {
    let matches = 0;
    if (isWinner) {
      // console.log('the winner is: ' + isWinner);
      break;
    }
    for (col = 0; col < maxCols; col++) {
      if (board[row][col] == currentPlayer) {
        matches++;
        if (matches > 3) {
          isWinner = true;
          // console.log('the winner is: ' + isWinner);
          break;
        }
      } else {
          matches = 0;
      }
    }
  }
  // console.log('the winner is: ' + currentPlayer);
  return isWinner;
}
