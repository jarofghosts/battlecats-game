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
module.exports.createGame = function () {
  return new Battlecat();
};
