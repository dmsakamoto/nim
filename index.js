//heap1 === 3sticks
//Heap2 === 5sticks
//Heap3 === 8sticks
var board = [];
//[[X,X,X],[X,X,X,X,X],[X.....x]]
for(var i=0; i<3; i++){
  //board[i].length === 3
  // for(var j=0; j<3; j++){
  //   board[i].push('X');
  // }

}

// var board = [3, ['x', 'x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']];
var board = [3,5,8]

// console.log(board);
// print the board
for(var i =0; i < board.length; i++){
  for(var j=0; j<board[i]; j++){
    console.log(i+1+'X');
  }
}

// ask for input player 1
//Assume player1 picks heap1,index1
// print the board
var heapPos;
var numberOfSticks;
var pos = [heapPos, numberOfSticks];


// ask for input player 2

// print the board
