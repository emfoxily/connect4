//==============================================================//
//              JAVASCRIPT VARIABLES & FUNCTIONS                //
//==============================================================//

// define the function that will populate the grid
const createBoard = () => {
  // declare a variable that will represent the game board, set it to the class for the game board using jQuery
  const $board = $('.connectFour');
  // use a for loop to generate the divs that will create the grid
  for (let i = 0; i < 42; i++) {
    // declare a variable and set it to a div tag using jQuery
    const $circle = $('<div>');
    // add a class to set a width and height for the circles
    $circle.addClass('circle');
    // append the circles to the game board
    $board.append($circle);
  }
};

// declare variables for the selectHouse modal
const $gryffindor = $('#gryffindor');
const $ravenclaw = $('#ravenclaw');
const $hufflepuff = $('#hufflepuff');
const $slytherin = $('#slytherin');
// make array consisting of two players for sorting hat to loop through
const $players = [];

// define a function that will prompt the user to pick a house (use a modal)
const selectHouse = () => {
  $('#selectHouse').show(2000);
  $('#selectHouseBox > button').on('click', (event) => {
    let house = $(event.currentTarget).children();
    $(house).css('opacity', '0.2');
    $players.push(house);
    if ($players.length === 2) {
      closeModal();
    }
    console.log($players);
  })
}

const closeModal = () => {
  $('#selectHouse').hide('slow');
}

// write if else statements that will check for which house was selected
  // once player one has selected, make that house unclickable
  // have the modal close upon selection from player two

//
