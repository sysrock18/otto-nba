import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import styles from './scoreboard.css';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.cardGameScore}>
        <Card id={`game-${this.props.game.ID}`}>
          <CardText>
            <h4>{this.props.game.location}</h4>
            <div>
              <img src={`http://localhost:3001/images/${this.props.game.awayTeam.Abbreviation.toLowerCase()}.png`} />
              {this.props.awayScore}
            </div>
            <div>
              <img src={`http://localhost:3001/images/${this.props.game.homeTeam.Abbreviation.toLowerCase()}.png`} />
              {this.props.homeScore}
            </div>
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Scoreboard;
