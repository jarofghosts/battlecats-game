var pieces = {
  destroyer: {
    size: 2,
    code: 'D'
  },
  cruiser: {
    size: 2,
    code: 'Z'
  },
  submarine: {
    size: 3,
    code: 'S'
  },
  battleship: {
    size: 4,
    code: 'B'
  },
  carrier: {
    size: 5,
    code: 'C'
  }
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

Battlecat.prototype.placePiece = function (code, positions) {
  var i = 0,
      l = positions.length;
  for (; i < l; ++i) {
    var x = i[0],
        y = i[1];
    this.playerBoard[x][y] = code;
  }
};

Battlecat.prototype.tryPlace = function (piece, startPosition, direction) {
  var size = pieces[piece].size,
      i = 0,
      x = startPosition[0],
      y = startPosition[1],
      positions = [];
  if ((direction == 'v' && x + size > 9) || (direction == 'h' && y + size > 9)) return;
  for (; i < size; ++i) {
    if (this.playerBoard[x][y] !== undefined) return;
    positions.push([x, y]);
    if (direction == 'v') { x++; }
    else if (direction == 'h') { y++; }
  }
  this.placePiece(pieces[piece].code, positions);
};

Battlecat.prototype.tryBomb = function (position) {

};

Battlecat.prototype.removePiece = function (piece) {

};

module.exports.Battlecat = Battlecat;
module.exports.createPlayer = function () {
  return new Battlecat();
};
