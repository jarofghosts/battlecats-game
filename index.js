function generateBoard() {
  var board = [],
      i = 0;
  for (; i < 10; ++i) {
    board[i] = new Array(10);
  }
  return board;
}

function Battlecat() {
  this.board = generateBoard();
}
