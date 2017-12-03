import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import styles from './standings.css';

class Standings extends Component {
  render() {
    return (
      <div className={styles.conferenceStandings}>
        <div className={styles.conferenceName}>
          <img src={`http://localhost:3001/images/${this.props.conference['@name'].toLowerCase()}.png`} />
          <span>{this.props.conference['@name']}</span>
        </div>
        <table className={styles.tableStandings}>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>G</th>
              <th>W</th>
              <th>L</th>
            </tr>
          </thead>
          <tbody>
          {this.props.conference.teamentry.map((item) => { return (
            <tr key={item.team.ID}>
              <td><b>{item.rank}</b></td>
              <td>
                <Avatar src={`http://localhost:3001/images/${item.team.Abbreviation.toLowerCase()}.png`} />
              </td>
              <td>{`${item.team.City} ${item.team.Name}`}</td>
              <td>{item.stats.GamesPlayed['#text']}</td>
              <td>{item.stats.Wins['#text']}</td>
              <td>{item.stats.Losses['#text']}</td>
            </tr>
          )})}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Standings;
