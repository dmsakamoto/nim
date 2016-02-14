
'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

class NimGame extends React.Component {

  constructor() {
    super();
    this.state = {
      'board': [3,5,8],
      'turns': 0,
      'gameOver': false
    }
  }

  checkGameOver() {
    let gameOver = this.state.gameOver;
    let winner = this.state.turns % 2;
    if (this.state.board.reduce((a, b) => { return a + b; }) === 0) {
      gameOver = true;
    } else {
      gameOver = false;
    }
    this.setState({
      'gameOver': gameOver,
      'winner': winner
    });
  }

  makeMove(event) {
    event.preventDefault();
    console.log(event);
    let inputs = ReactDOM.findDOMNode(this.refs.form);
    let values = {};
    ['sticks', 'heap'].forEach((field) => {
      values[field] = inputs[field].value;
    });
    // console.log(values)
    let board = this.state.board;
    let turns = this.state.turns;
    if (values.heap > 0 && values.heap <= board.length) {
      if (values.sticks > 0 && values.sticks <= board[values.heap - 1]) {
        board[values.heap - 1] -= values.sticks;
        turns++;
        this.setState({
          'board': board,
          'turns': turns
        });
        this.checkGameOver();
      }
    }
  }

  printHeap(heap, index) {
    let sticks = heap;
    let str = 'Heap ' + (index + 1) + ' has ' + sticks + ' sticks: ';
    for (let i = 0; i < sticks; i++) {
      str += '|';
    }
    return str;
  }

  render() {
    let gameOver = this.state.gameOver;
    return (
      <div>
        <div>
          <form ref="form" onSubmit={this.makeMove.bind(this)}>
            Player {this.state.turns % 2 + 1} removes
            <input type="text" name="sticks"></input>
            sticks from heap <input type="text" name="heap"></input>
            <button type="sumbit">Make move!</button>
          </form>
        </div>
        {!gameOver && <div>{this.state.board.map((heap, index) => <p>{this.printHeap(heap, index)}</p>)}</div>}
        {gameOver && <div>Player {this.state.winner} wins the game!</div>}
      </div>
    )
  }
}

ReactDOM.render(<NimGame />, document.getElementById('root'));
