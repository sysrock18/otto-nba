import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <section name="Home">
        <h1>Scoreboards</h1>
        <Link to="/teams">
          Go to teams
        </Link>
      </section>
    );
  }
}

export default Home;
