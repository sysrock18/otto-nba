import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import api from '../api';
import Scoreboard from '../components/scoreboard';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameScore: [],
      loading: true
    };
  }

  async componentDidMount() {
    const currentSeason = await api.season.getCurrent(new Date());
    const seasonName = currentSeason.currentseason.season[0].details.slug;
    const scoreboards = await api.scoreboards.getList(new Date(), seasonName);
    const gameScore = scoreboards.scoreboard.gameScore;

    this.setState({
      gameScore,
      loading: false
    });
  }

  render() {
    return (
      <section name="Home">
        <h1>Scoreboards</h1>
        <h3>There are {this.state.gameScore.length} games</h3>

        <Link to="/teams">
          Go to teams
        </Link>

        <section>
          {this.state.loading && (
            <h2>Loading Scoreboards...</h2>
          )}
          {this.state.gameScore
            .map(score => <Scoreboard key={score.game.ID} {...score} />)}
        </section>
      </section>
    );
  }
}

export default Home;
