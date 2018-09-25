//==============================================================//
//              JAVASCRIPT VARIABLES & FUNCTIONS                //
//==============================================================//

let board = [];

const createBoard = () => {
  const $board = $('#connectFour');
  for (let row = 0; row < 6; row++) {
    let boardRow = [];
    const $row = $('<div>')
      .addClass('row');
    for (let col = 0; col < 7; col++) {
      const $col = $('<div>')
      .addClass('col')
      .attr('id', 'cell-' + row.toString() + '-' + col.toString())
      .one('click', move)
    boardRow.push($col.attr('class'));
    $row.append($col);
    }
    board.push(boardRow);
    $board.append($row);
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
    // give crest low opacity upon being clicked as if to say the house cannot be chosen again
    $(event.currentTarget).css('opacity', '0.2');
    // push the crest image to the players array
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
      // event.stopPropagation();
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

// make an array of moves that goes to the number of circles
  const moves = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
                  34, 35, 36, 37, 38, 39, 40, 41, 42];


  const move = () => {
    let coords = $(event.currentTarget).attr('id').split('-');
    console.log('current row: ' + coords[1]);
    console.log('current col: ' + coords[2]);
    console.log($(event.currentTarget).attr('id'));
    let currentPlayer = ((moves[0] % 2 !== 0) ? $playerOne : $playerTwo);
    $(event.currentTarget).addClass(currentPlayer);
    board[coords[1],coords[2]] = currentPlayer;
    moves.shift();
    console.log(board);

    // call function called isGameOver(currentPlayer)
  }
