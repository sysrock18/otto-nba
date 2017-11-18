import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Teams extends Component {
  render() {
    return (
      <section name="Teams">
        <h1>Teams</h1>
        <Link to="/">
          Go back to home
        </Link>
      </section>
    );
  }
}

export default Teams;
