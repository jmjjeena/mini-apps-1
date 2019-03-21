import React from 'react';
import Board from './Board.jsx'
import Square from './Square.jsx'

class App  extends React.Component {
  constructor(props) {
    super(props);
      this.state= {}
    }

  render() {
    return (
      <div className = "game">
        <h1>CONNECT4</h1>
        <div>
          <Board />
        </div>
      </div>
    )
  }
}

export default App;