import React from 'react';
import Square from './Square.jsx'

class Board extends React.Component {
  constructor() {
    super()
      this.state= {
        data: [
          [null, null, null, null, null],
          [null, null, null, null, null],
          [null, null, null, null, null],
          [null, null, null, null, null],
          [null, null, null, null, null]
        ]
    }
  }

  render() {
    return (
      <div>
        <div className="board">
          <Square data= {this.state.data[0]}/>
          <Square data= {this.state.data[0]}/>
          <Square data= {this.state.data[0]}/>
          <Square data= {this.state.data[0]}/>
          <Square data= {this.state.data[0]}/>
        </div>
      </div>
    )
  }
}

export default Board;