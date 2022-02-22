import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './scoreboard.css';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.cardGameScore}>
        <Card id={`game-${this.props.game.ID}`} style={{
          textAlign: 'center',
          minWidth: '500px'
        }}>
          <CardContent>
            <div className={styles.containerTeam}>
              <div><img src={`https://otto-nba-sfs.now.sh/images/${this.props.game.awayTeam.Abbreviation.toLowerCase()}.png`} /></div>
              <div className={styles.awayTeam}>
                <div className={styles.city}>{this.props.game.awayTeam.City}</div>
                <div className={styles.teamName}>{this.props.game.awayTeam.Name}</div>
              </div>
            </div>
            <div className={styles.containerResult}>
              <div>Location</div>
              <div className={styles.location}>{this.props.game.location}</div>
              <div className={styles.containerScore}>
                <div className={styles.awayScore}>{this.props.awayScore}</div>
                <div className={styles.homeScore}>{this.props.homeScore}</div>
              </div>
              <div className={styles.clear}></div>
              <div>{this.props.game.date}</div>
              <div>{this.props.game.time}</div>
            </div>
            <div className={styles.containerTeam}>
              <img src={`https://otto-nba-sfs.now.sh/images/${this.props.game.homeTeam.Abbreviation.toLowerCase()}.png`} />
              <div className={styles.homeTeam}>
                <div className={styles.city}>{this.props.game.homeTeam.City}</div>
                <div className={styles.teamName}>{this.props.game.homeTeam.Name}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Scoreboard;
