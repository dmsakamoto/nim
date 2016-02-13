var prompt = require('prompt');

var NimGame = function() {
  this.board = [3, 5, 8];
  this.turns = 0;
};

NimGame.prototype.print = function () {
  for (var i=0; i<this.board.length; i++) {
    console.log('Row ' + (i+1) + ': ' + Array(this.board[i]+1).join('X'));
  }
};

NimGame.prototype.turn = function (whichHeap, howMany) {
  var which = whichHeap - 1;
  if ([1,2,3].indexOf(whichHeap) === -1) {
    return console.log('Invalid heap');
  }
  if (this.board[which] < howMany) {
    return console.log('Removing too many from heap');
  }
  this.board[which] -= howMany;
  this.turns++;
  console.log('Successfully removed', howMany, 'from heap', whichHeap);
};

NimGame.prototype.gameOver = function () {
  var over = this.board.reduce(function(accum, num) {
    return accum + num;
  }, 0) === 0;
  if (over) {
    if (this.turns % 2 === 0) {
      console.log('Player 2 won!');
    } else {
      console.log('Player 1 won!');
    }
    return true;
  } else {
    return false;
  }
};

// var thisGame = new NimGame();
// thisGame.print();
// thisGame.turn(1, 4);
// thisGame.turn(5, 4);
// thisGame.turn(1, 1);
// thisGame.print();
// console.log(thisGame.turns);

// console.log(thisGame) // => {h1: 3, h2: 5, h3: 8}

var runGame = function () {

  var thisGame = new NimGame();
  // prompt.start();

  prompt.start();
  while (!thisGame.gameOver()) {
    // prompt user input
    prompt.get(['whichHeap', 'howMany'], function(err, result) {
      thisGame.turn(result.whichHeap, result.howMany);
      thisGame.print();
      console.log('Player', ((thisGame.turns % 2) + 1) + '\'s turn');
    });
  }
  prompt.end();
};

runGame();
