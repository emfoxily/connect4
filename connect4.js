//==============================================================//
//============== JAVASCRIPT VARIABLES & FUNCTIONS ==============//
//==============================================================//

// define the function that will populate the grid
const createBoard = () => {
  const $board = $('.connectFour');
  // use a for loop to generate the divs that will create the grid
  for (let i = 0; i < 42; i++) {
    const $circle = $('<div>');
    // add a class to style the circles
    $circle.addClass('circle');
    $board.append($circle);
  }
}
