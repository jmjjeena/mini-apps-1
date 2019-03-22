import React from 'react';
import Square from './Square.jsx'

class Board extends React.Component {
  constructor() {
    super()
      this.state= {
        current: 'red',
        data: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(r, col) {
    var color = this.state.current;
    if(color === 'red') {
      color = 'yellow'
    } else {
      color = 'red'
    };
    var board = this.state.data;

    for (var r = 0; r < 5; r++) {
      if(!board[5-r][col]) {
        board[r][col] = color;
        break;
      }
    }

    this.setState({
      current: color,
      data: board
    })
  }

  render() {
    return (
      <div>
        <div className="board">
          <Square data= {this.state.data[0]} handleClick={i => this.handleClick(0, i)} color={this.state.current}/>
          <Square data= {this.state.data[0]} handleClick={this.handleClick} color={this.state.current}/>
          <Square data= {this.state.data[0]} handleClick={this.handleClick} color={this.state.current}/>
          <Square data= {this.state.data[0]} handleClick={this.handleClick} color={this.state.current}/>
          <Square data= {this.state.data[0]} handleClick={this.handleClick} color={this.state.current}/>
        </div>
      </div>
    )
  }
}

export default Board;

