import React, { Component } from 'react';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id={`game-${this.props.game.ID}`}>
        <h4>{this.props.game.location}</h4>
      </article>
    )
  }
}

export default Scoreboard;
