var pieces = {
  destroyer: 2,
  cruiser: 2,
  submarine: 3,
  battleship: 4,
  carrier: 5
};

function generateBoard() {
  var board = [],
      i = 0;
  for (; i < 10; ++i) {
    board[i] = new Array(10);
  }
  return board;
}

function Battlecat() {
  this.playerBoard = generateBoard();
  this.enemyBoard = generateBoard();
  this.id = '';
  this.playerName = '';

  return this;
}

Battlecat.prototype.placePiece = function (piece, startPosition, direction) {
  
};

Battlecat.prototype.tryBomb = function (position) {

};

Battlecat.prototype.removePiece = function (piece) {

};

module.exports.Battlecat = Battlecat;
module.exports.createPlayer = function () {
  return new Battlecat();
};
