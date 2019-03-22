import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button id={this.props.data[0]} handleClick={() => this.props.onClick(0)}/>
        <button id={this.props.data[1]}/>
        <button id={this.props.data[2]}/>
        <button id={this.props.data[3]}/>
        <button id={this.props.data[4]}/>
      </div>
    )
  }
}

export default Square;