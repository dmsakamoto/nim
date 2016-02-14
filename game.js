'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      heaps: [3, 5, 8],
      player1: 0,
      player2: 0,
      turns: 0
    }
  }

  printHeap() {
    let printed = this.state.heaps.map( (heap) => {
      let str = '';
      for (let i = 0; i < heap; i++) {
        str += 'X';
      }
      return str;
    });
    return printed;
  }

  removeFromHeap(rowNumber, stickAmount) {

    let heaps = this.state.heaps;
    //check row
    if (rowNumber - 1 >= heaps.length || rowNumber - 1 < 0) {
      return;
    }
    //check sticks
    if (stickAmount > heaps[rowNumber - 1] || stickAmount < 1) {
      return;
    }
    // remove
    heaps[rowNumber - 1] -= stickAmount;

    this.setState({
      heaps: heaps
    })
  }

  render() {
      return (
        <div>
          {this.printHeap().map( (element, index) => {
            return (<p>{"Row " + (index + 1) + ", " + element}</p>);
          })}
          <div>{this.state.playerTurn + " turn"}</div>
        </div>
      );
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
