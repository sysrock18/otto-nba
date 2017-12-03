import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import Standings from './standings';
import styles from './teams.css';

class Teams extends Component {
  render() {
    return (
      <section name="Teams">
        {this.props.standings[0] && this.props.standings[1] ?
          (<div className={styles.container}>
            <Standings conference={this.props.standings[0]} />

            <Standings conference={this.props.standings[1]} />
          </div>)
          : null}
      </section>
    );
  }
}

export default Teams;
