import React, { Component, PropTypes } from 'react';
import Standings from '../components/standings';
import styles from './teams.css';

class Teams extends Component {
  render() {
    return (
      <section name="Teams">
        {this.props.standings[0] && this.props.standings[1] ?
          (<div style={container}>
            <Standings conference={this.props.standings[0]} />

            <Standings conference={this.props.standings[1]} />
          </div>)
          : null}
      </section>
    );
  }
}

const container = {
  textAlign: 'center'
}

export default Teams;
