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

  // empty cells so that there's nothing in them until a user clicks one
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

    //----------------------------------------------//
      // if ($players[0] === undefined) {
      //   console.log('this code is up to no good');
      // } else {
      //   console.log('mischief managed');
      // }
    //----------------------------------------------//

    // write if else statements that will check for if two houses were selected
    if ($players.length === 2) {
    // close modal if it returns true
      closeModal();
      // event.stopPropagation();
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

// make an array of moves that goes up to the number of circles
  var moves = [];
  // use for loop to generate the amount of moves possible by multiplying maxRows by maxCols
  for (i = 0; i < (maxRows * maxCols); i++) {
    moves.push(i);
  }

// define a function called move that will house the click event for adding the house crest to the selected circle
const move = () => {

  // declare a variable for coordinates and give it the value of the current target along with a unique id
  let coords = $(event.currentTarget).attr('id').split('-');

  // declare a variable called currentPlayer and set it equal to check if the move is divisible by two and update the currentPlayer variable accordingly
  let currentPlayer = ((moves[0] % 2 === 0) ? $playerOne : $playerTwo);

  // add the class of the currentPlayer
  $(event.currentTarget).addClass(currentPlayer);
    board[coords[1]][coords[2]] = currentPlayer;
  moves.shift();

  const sortingHat = () => {
    $('#hatBox').show(2000);
    $('.winner').append(currentPlayer + '!');
  }

    if (evaluateRows(currentPlayer)) {
      sortingHat();
      console.log('The winner is ' + currentPlayer);
    } else if (evaluateCols(currentPlayer)) {
      sortingHat();
      console.log('The winner is ' + currentPlayer);
    } else if (moves.length === 0) {
      console.log('The game is a draw!');
    }
}

const evaluateRows = (currentPlayer) => {
  let isWinner = false;
  for (row = 0; row < maxRows; row++) {
    let matches = 0;
    if (isWinner) {
      break;
    }
    for (col = 0; col < maxCols; col++) {
      if (board[row][col] == currentPlayer) {
        matches++;
        if (matches > 3) {
          isWinner = true;
          break;
        }
      } else {
          matches = 0;
      }
    }
  }
  return isWinner;
}

const evaluateCols = (currentPlayer) => {
  let isWinner = false;
  for (col = 0; col < maxCols; col++) {
    let matches = 0;
    if (isWinner) {
      break;
    }
    for (row = 0; row < maxRows; row++) {
      if (board[row][col] == currentPlayer) {
        matches++;
        if (matches > 3) {
          isWinner = true;
          break;
        }
      } else {
          matches = 0;
      }
    }
  }
  return isWinner;
}
